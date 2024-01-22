from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

from models import db, Profile, Post


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)

db.init_app(app)

@app.get('/')
def index():
    return 'Welcome to Songbook'

@app.get('/profiles')
def get_profiles():
    profiles = Profile.query.all()
    return [p.to_dict() for p in profiles]

@app.get('/posts')
def get_posts():
    posts = Post.query.all()
    return [p.to_dict() for p in posts]




if __name__ == '__main__':
    app.run(port=5555, debug=True)