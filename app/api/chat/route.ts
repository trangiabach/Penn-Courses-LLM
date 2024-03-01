import { NextRequest } from 'next/server';
import { Message as VercelChatMessage, nanoid, StreamingTextResponse } from 'ai';
import { PromptTemplate } from 'langchain/prompts';
import { auth } from '@/auth';
import { anonymousUserId } from '@/consts/user';
import { aiPrompt } from '@/consts/prompts';
import { kv } from '@vercel/kv';
import { Pinecone } from "@pinecone-database/pinecone"
import { OpenAIEmbeddings, ChatOpenAI } from '@langchain/openai';
import { PineconeStore } from "@langchain/pinecone";
import { RunnableSequence } from "@langchain/core/runnables";
import { formatDocumentsAsString } from "langchain/util/document";
import { BytesOutputParser } from "@langchain/core/output_parsers";
import Exa from "exa-js"

 
export const runtime = 'edge';
 
const pinecone = new Pinecone();
const pineconeIndex = pinecone.Index(process.env.PINECONE_INDEX || '');
const embeddings = new OpenAIEmbeddings({ modelName: 'text-embedding-ada-002' });
const exa = new Exa(process.env.EXA_API_KEY)

const formatMessage = (message: VercelChatMessage) => {
  return `${message.role}: ${message.content}`;
};

export async function POST(req: NextRequest) {
  const body = await req.json();
  const messages = body.messages ?? [];
  const formattedPreviousMessages = messages.slice(0, -1).map(formatMessage);
  const currentMessageContent = messages[messages.length - 1].content;
  const userId = (await auth())?.user.id || anonymousUserId
  const pineconeVectorStore = await PineconeStore.fromExistingIndex(embeddings, {
    pineconeIndex
  })
  const retriever = pineconeVectorStore.asRetriever({
    k: 5
  });
 
  const prompt = PromptTemplate.fromTemplate(aiPrompt);

  const model = new ChatOpenAI({
    temperature: 0.0,
    streaming: true,
    callbacks: [
      {
        async handleLLMEnd(output) {
          const outputText = output.generations[0][0].text
          const { results: citations } = await exa.search(outputText, { useAutoprompt: false, type: "keyword", numResults: 3 });
          const title = outputText.substring(0, 100)
          const createdAt = Date.now()

          const id = body.id ?? nanoid()
          const path = `/chat/${id}`
          const payload = {
            id,
            title,
            userId,
            createdAt,
            path,
            messages: [
              ...messages,
              {
                content: outputText.replaceAll('undefined', ''),
                role: 'assistant',
                citations
              }
            ]
          }
          await kv.hmset(`chat:${id}`, payload)
          await kv.zadd(`user:chat:${userId}`, {
            score: createdAt,
            member: `chat:${id}`
          })
        },
      }
    ]
  });

  const chain = RunnableSequence.from([
    prompt,
    model,
    new BytesOutputParser()
  ]);

  const retrieverAndFormatter = retriever.pipe(formatDocumentsAsString);
  const documents = await retrieverAndFormatter.invoke(currentMessageContent);
 
  const stream = await chain.stream({
    question: currentMessageContent,
    chat_history: formattedPreviousMessages.join('\n'),
    context: documents
  });

  return new StreamingTextResponse(stream);
}