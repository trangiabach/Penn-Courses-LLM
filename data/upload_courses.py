import json
import os
from dotenv import load_dotenv
from langchain.docstore.document import Document
from langchain_openai import OpenAIEmbeddings
from langchain_pinecone import PineconeVectorStore

load_dotenv()

index_name = os.environ["PINECONE_INDEX"]
courses = json.load(open('./courses_graph.json'))
course_codes = list(courses.keys())
embeddings = OpenAIEmbeddings(model="text-embedding-ada-002")


def get_prereqs_text(course, courses):
    prereqs_text = ""
    if 'prereqs' in course:
        prereqs = course['prereqs']

        if 'OR' in prereqs:
            or_text_contents = []
            for prereq in prereqs['OR']:
                if prereq in courses:
                    prereq_course = courses[prereq]
                    prereqs_text += f"{prereq} - {prereq_course['name']}"
                    or_text_contents.append(prereqs_text)
                else:
                    or_text_contents.append(prereq)
            or_text = ' OR '.join(or_text_contents)
            prereqs_text += or_text
        if 'AND' in prereqs:
            and_text_contents = []
            for prereq in prereqs['AND']:
                if 'OR' in prereq:
                    and_text_contents.append(' OR '.join(prereq['OR']))
                elif prereq in courses:
                    prereq_course = courses[prereq]
                    prereqs_text += f"{prereq} - {prereq_course['name']}"
                    and_text_contents.append(prereqs_text)
                else:
                    and_text_contents.append(prereq)
            and_text = ' AND '.join(and_text_contents)
            prereqs_text += and_text

    return prereqs_text


if __name__ == "__main__":
    documents = []

    for code in course_codes:
        course = courses[code]
        title = course['name']
        department = course['department']
        description = course['description']
        prereqs = get_prereqs_text(course=course, courses=courses)

        doc = (
            f'Course: {code} - {title}\n'
            + f'Course Code: \n'
            + f'Department: {department}\n'
            + f'Title: {title}\n'
            + f'Description: {description}\n'
            + f'Prerequisites: {prereqs}\n'
        )

        metadata = {
            "Course code": code,
            "Title": title,
            "Department": department,
            "Description": description,
            "Prerequisites": prereqs
        }

        document = Document(page_content=doc, metadata=metadata)

        documents.append(document)

PineconeVectorStore.from_documents(documents, embeddings, index_name=index_name)