### Penn Courses LLM 📚

Check it out: https://penn-courses-llm.vercel.app/

<img width="1728" alt="Screenshot 2024-01-22 at 5 54 51 AM" src="https://github.com/trangiabach/Penn-Courses-LLM/assets/62537937/88206503-9dc5-4b1b-9d94-07524149bb27">

Link: https://penn-courses-llm.vercel.app/

Penn Course LLM (PCL) is a RAG-based Chatbot built to help Penn students search, pland and explore courses at UPenn more easily. Users can interact with the RAG-based LLM chats, save their interaction sessions and share their sessions via a public link.


## Features Requests

- Agent-based approach for more complex answers
- More connectors (with web, Penn-related products, etc) to enrich responses
- Reduce latency with saving chat sessions
- Include citations


## Technologies

The project uses Next.js (frontend + server functions), Cohere (LLM) and Vercel KV (data store for chat sessions)

## How to run

Run app locally on your computer. Available on localhost:3000

```
$ npm install
$ npm run dev
```

### Cohere Connector

This app uses the Cohere Connector API for RAG (Retrieval Augmented Generation) functionality. This is a Flask server running a `/search` endpoint for Cohere to query relevant documents.

## Run Cohere Connector

First, generate embeddings `courses_graph.json` using Cohere Embed
```
python run dev/generate_embeddings.py
```

Secondly, load embeddings into a Pinecone instance,
```
python run dev/load_data.py
```

Thirdly, run the Flask serving the document search functionality
```
poetry run flask --app provider --debug run
```

You can now test the endpoint like so:
```bash
  curl --request POST \
    --url http://localhost:5000/search \
    --header 'Content-Type: application/json' \
    --header 'Authorization: Bearer {PINECONE_CONNECTOR_API_KEY} \
    --data '{
    "query": "BBQ"
  }'
```

## Deployment

Uses Vercel for quick deployment

```
$ vercel deploy
```
