from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData, ForeignKey
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin


metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})


db = SQLAlchemy(metadata=metadata)



class Comment(db.Model, SerializerMixin):
    __tablename__ = 'comment_table'

    id = db.Column(db.Integer, primary_key = True)
    content = db.Column(db.String)

    post_id = db.Column(db.Integer, ForeignKey('post_table.id'))
    profile_id = db.Column(db.Integer, ForeignKey('profile_table.id'))

    post = db.relationship('Post', back_populates = 'comments')
    profile = db.relationship('Profile', back_populates = 'comments')

    serialize_rules = ['-post.comments', '-profile.comments']

        

    def __repr__(self):
        return f'<Comment {self.id}>'
    


class Profile(db.Model, SerializerMixin):
    __tablename__ = 'profile_table'

    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String, unique = True, nullable = False)
    liked_genres = db.Column(db.String)
    liked_posts = db.Column(db.String)
    profile_pic = db.Column(db.String)

    # post_id = db.Column(db.Integer, ForeignKey('post_table.id)'))

    comments = db.relationship('Comment', back_populates = 'profile')

    serialize_rules = ['-comments.profile']

    def __repr__(self):
        return f'<Profile {self.id}: {self.username}>'

# p = Profile(username='test', password='test', liked_genres='test', profile_pic='test')


class Post(db.Model, SerializerMixin):
    __tablename__ = 'post_table'

    id = db.Column(db.Integer, primary_key = True)
    song_title = db.Column(db.String, nullable = False)
    artist_name = db.Column(db.String)
    likes = db.Column(db.Integer, nullable = False)
    genre = db.Column(db.String)

    profile_id = db.Column(db.Integer, ForeignKey('profile_table.id'))


    comments = db.relationship('Comment', back_populates = 'post')

    

    serialize_rules = ['-comments.post']


    def __repr__(self):
        return f'<Post {self.id}: {self.song_title}>'
