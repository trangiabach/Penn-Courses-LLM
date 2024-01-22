import csv
import json
import os

import cohere
from dotenv import load_dotenv

load_dotenv()

courses = json.load(open('./dev/courses_graph.json'))
course_codes = list(courses.keys())


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

        documents.append({
            "id": code,
            "original": doc,
            "metadata": {
                "Course code": code,
                "Title": title,
                "Department": department,
                "Description": description,
                "Prerequisites": prereqs
            }
        })

    co = cohere.Client(os.environ["PINECONE_COHERE_API_KEY"])

    embedded_docs = {}
    batch_size = 50
    limit = len(documents)

    for i in range(0, limit, batch_size):
        texts = []
        if i + batch_size > limit:
            texts = [doc["original"] for doc in documents[i:]]
        else:
            texts = [doc["original"] for doc in documents[i: i + batch_size]]

        response = co.embed(
            texts,
            model=os.environ["PINECONE_COHERE_EMBED_MODEL"],
            input_type="search_document",
        )

        for e, _ in enumerate(response.embeddings):
            embedded_docs[documents[i + e]["id"]] = {
                **documents[i + e],
                "embedding": response.embeddings[e],
            }

    with open("./dev/courses_embeddings.json", "w") as json_file:
        json.dump(embedded_docs, json_file)
