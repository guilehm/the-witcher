import os

from chatterbot import ChatBot
from chatterbot.response_selection import get_random_response
from django.http import JsonResponse

from flask import Flask, render_template, request

app = Flask(__name__)

MONGO_DB_URI = os.getenv('MONGO_DB_URI', 'mongodb://localhost:27017')

from chatterbot.trainers import ChatterBotCorpusTrainer

bot = ChatBot(
    'Chatterbot',
    storage_adapter="chatterbot.storage.MongoDatabaseAdapter",
    database='chatbot',
    database_uri=MONGO_DB_URI,
)

trainer = ChatterBotCorpusTrainer(bot)
trainer.train("chatterbot.corpus.english")


@app.route("/")
def home():
    return render_template("index.html")

@app.route("/get")
def get_bot_response():
    userText = request.args.get('msg')
    return str(bot.get_response(userText))


if __name__ == "__main__":
    app.run()
