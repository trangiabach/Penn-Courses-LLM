import logging

import connexion
from dotenv import load_dotenv

load_dotenv()


API_VERSION = "api.yaml"


def create_app():
    app = connexion.FlaskApp(__name__, specification_dir="../openapi")
    app.add_api(
        API_VERSION, resolver=connexion.resolver.RelativeResolver(
            "provider.app")
    )
    logging.basicConfig(level=logging.INFO)
    flask_app = app.app
    config_prefix = 'PINECONE'
    flask_app.config.from_prefixed_env(config_prefix)
    flask_app.config["APP_ID"] = config_prefix

    return flask_app


class UpstreamProviderError(Exception):
    def __init__(self, message):
        self.message = message

    def __str__(self):
        return self.message
