from random import randint, choice as rc
from app import app
from models import db, Profile, Post
from faker import Faker

fake = Faker()

def create_profile():
    profiles = []
    for _ in range(40):
        p = Profile(
            username = fake.name(),
            liked_genres = fake.word(),
            liked_posts = randint(0, 200)
        )
        profiles.append(p)
    return profiles

def create_post():
    posts = []
    for _ in range(20):
        po = Post(
            song_title = fake.name(),
            likes = randint(0, 30),
            comments = fake.sentence(),
            genre = fake.word()
        )
        posts.append(po)
    return posts

if __name__ == '__main__':
    with app.app_context():
        print('Clearing database...')
        Profile.query.delete()
        Post.query.delete()

        print('Seeding profiles')
        profiles = create_profile()
        db.session.add_all(profiles)
        db.session.commit()

        print('Seeding posts...')
        posts = create_post()
        db.session.add_all(posts)
        db.session.commit()

        print('Seeding complete')



