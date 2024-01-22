from dotenv import load_dotenv
import cohere
import os

load_dotenv()

co = cohere.Client(os.environ['PINECONE_COHERE_API_KEY'])

created_connector = co.create_connector(
    name="PCL - Pinecone Courses Connector",
    url="https://pcl-pinecone-cohere-connector.fly.dev/search",
    service_auth={
        "type": "bearer",
        "token": os.environ["PINECONE_CONNECTOR_API_KEY"]
    }
)

print(created_connector)
