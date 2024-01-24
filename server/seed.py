from random import randint, choice as rc
from app import app
from models import db, Profile, Post, Comment
from faker import Faker

fake = Faker()

def create_profile():
    profiles = []
    for _ in range(40):
        p = Profile(
            username = fake.name(),
            liked_genres = fake.name(),
            liked_posts = randint(0, 200),
            profile_pic = fake.word()
        )
        profiles.append(p)
    return profiles

def create_post():
    posts = []
    for _ in range(20):
        po = Post(
            song_title = fake.name(),
            likes = randint(0, 30),
            genre = fake.name(),
            profile_id = rc([profile.id for profile in profiles])
        )
        posts.append(po)
    return posts

def create_comments(posts, profiles):
    comments = []
    for _ in range(20):
        c = Comment(
            content = fake.sentence(),
            post_id = rc([post.id for post in posts]),
            profile_id = rc([profile.id for profile in profiles])
        )
        comments.append(c)
    return comments

if __name__ == '__main__':
    with app.app_context():
        print('Clearing database...')
        Profile.query.delete()
        Post.query.delete()
        Comment.query.delete()

        print('Seeding profiles')
        profiles = create_profile()
        db.session.add_all(profiles)
        db.session.commit()

        print('Seeding posts...')
        posts = create_post()
        db.session.add_all(posts)
        db.session.commit()

        print('Seeding comments...')
        comments = create_comments(posts, profiles)
        db.session.add_all(comments)
        db.session.commit()

        print('Seeding complete')



