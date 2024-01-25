from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS


from models import db, Profile, Post, Comment


app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.sqlite3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)

db.init_app(app)

@app.get('/')
def index():
    return 'Welcome to Songbook'

@app.get('/profiles')
def get_profiles():
    # import pdb
    # pdb.set_trace()
    profiles = Profile.query.all()
    return [p.to_dict() for p in profiles]

@app.get('/profiles/<int:id>')
def get_profile_by_id(id):
    profile = db.session.get(Profile, id)
    if not profile:
        return {'Error': 'Profile not found.'}
    profile_dict = profile.to_dict()
    # publisher = db.session.get(Publisher, id).filter_by(author_id = id).all()
    return profile_dict, 202

@app.get('/posts')
def get_posts():
    posts = Post.query.all()
    return [p.to_dict(rules = []) for p in posts]

@app.get('/posts/<int:id>')
def get_post_by_id(id):
    post = db.session.get(Post, id)
    if not post:
        return {'Error': 'Post not found.'}
    post_dict = post.to_dict()
    # publisher = db.session.get(Publisher, id).filter_by(author_id = id).all()
    return post_dict, 202

@app.get('/comments')
def get_comments():
    comments = Comment.query.all()
    return [c.to_dict(rules = ['-post', '-post_id', '-profile', '-profile_id']) for c in comments]


@app.post('/profiles')
def post_new_profile():
    print("we made it")
    try:
        data = request.json
        print("data unpacked")
        print(f"\n>> Our current data: \n{data}")
        print(f"\n>> Current data's type: {type(data)}")

        p = Profile(
            username = data.get("username"),
            profile_pic = data.get("profile_pic")
        )

        print(p)

        print("profile object instantiated")
        db.session.add(p)
        print("new profile added to database")
        db.session.commit()
        print("new profile committed to database for storage")

        return p.to_dict(), 201
    except Exception:
        return {'errors': ['validation errors']}, 400
    
# @app.patch('/posts/id')

@app.patch('/posts/<int:id>')
def patch_posts(id):
    try:
        data = request.json
        post = db.session.get(Post, id)
        if not post:
            return {'error': 'not found'}, 404
        for key in data:
            setattr(post, key, data[key])
        db.session.add(post)
        db.session.commit()
        return post.to_dict(), 202
    except Exception as e:
        return {'errors': ['validation errors']}, 400
    



if __name__ == '__main__':
    app.run(port=5555, debug=True)