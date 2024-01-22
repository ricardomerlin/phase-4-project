from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData, ForeignKey
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin


metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})


db = SQLAlchemy(metadata=metadata)


class Profile(db.Model, SerializerMixin):
    __tablename__ = 'profile_table'

    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String, nullable = False)
    liked_genres = db.Column(db.String)
    liked_posts = db.Column(db.String)

    # post_id = db.Column(db.Integer, ForeignKey('post_table.id)'))

    posts = db.relationship('Post', back_populates = 'profile')

    def __repr__(self):
        return f'<Profile {self.id}>'

class Post(db.Model, SerializerMixin):
    __tablename__ = 'post_table'

    id = db.Column(db.Integer, primary_key = True)
    song_title = db.Column(db.String, nullable = False)
    likes = db.Column(db.Integer, nullable = False)
    comments = db.Column(db.String)
    genre = db.Column(db.String)

    profile_id = db.Column(db.Integer, ForeignKey('profile_table.id'))

    profile = db.relationship('Profile', back_populates = 'posts')

    def __repr__(self):
        return f'<Post {self.id}: {self.song_title}>'
    