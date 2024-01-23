import { kv } from '@vercel/kv'
import { OpenAIStream, StreamingTextResponse, Message as VercelChatMessage, CohereStream } from 'ai'
import OpenAI from 'openai'

import { auth } from '@/auth'
import { nanoid } from '@/lib/utils'
import { anonymousUserId } from '@/consts/user'
import { ChatCohere } from "@langchain/cohere";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { aiPrompt } from '@/consts/prompts'
import { CohereClient, Cohere } from "cohere-ai";

export const runtime = 'edge'


const toCohereRole = (role: string): Cohere.ChatMessageRole => {
  if (role === 'user') {
    return Cohere.ChatMessageRole.User;
  }
  return Cohere.ChatMessageRole.Chatbot;
};

const ingestPrompt = (chatHistory: Cohere.ChatMessage[]) => {
  const doesPromptExist = chatHistory.filter(chat => chat.message === aiPrompt).length > 0;

  if (doesPromptExist) {
    return chatHistory
  }

  const newPrompt = {
    message: aiPrompt,
    role: Cohere.ChatMessageRole.User
  }


  return [newPrompt, ...chatHistory]


}

export async function POST(req: Request, res: Response) {
  const json = await req.json()
  const { messages, previewToken } = json
  const userId = (await auth())?.user.id || anonymousUserId
  const chatHistory = ingestPrompt(messages.map((message: any) => ({
    message: message.content,
    role: toCohereRole(message.role),
  })));
  const newInput = chatHistory.pop()?.message || '';

  const body = JSON.stringify({
    model: 'command',
    stream: true,
    message: newInput,
    'chat_history': chatHistory,
    'prompt_truncation': "AUTO",
    'citation_quality': "fast",
    connectors: [{"id":"pcl---pinecone-courses-connector-de9j0d"}],
    temperature: 0.0
  })


  const response = await fetch('https://api.cohere.ai/v1/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.COHERE_API_KEY}`,
    },
    body
  });

  if (!response.ok) {
    return new Response(await response.text(), {
      status: response.status,
    });
  }

  const stream = CohereStream(response, {
    onCompletion: async completion => {
          const title = json.messages[0].content.substring(0, 100)
          const id = json.id ?? nanoid()
          const createdAt = Date.now()
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
                content: completion.replaceAll('undefined', ''),
                role: 'assistant'
              }
            ]
          }
          await kv.hmset(`chat:${id}`, payload)
          await kv.zadd(`user:chat:${userId}`, {
            score: createdAt,
            member: `chat:${id}`
          })
    }
  });
 

  return new StreamingTextResponse(stream);
}
