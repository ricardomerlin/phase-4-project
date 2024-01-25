from random import randint, choice as rc
from app import app
from models import db, Profile, Post, Comment, Genre
from faker import Faker

fake = Faker()

def create_profile():
    profiles = []
    for _ in range(2):
        p = Profile(
            username = fake.name(),
            profile_pic = 'https://www.aces.edu/wp-content/uploads/2023/04/iStock-1232014586.jpg'
        )
        profiles.append(p)
    return profiles


def create_comments(posts, profiles):
    comments = []
    for _ in range(5):
        c = Comment(
            content = fake.sentence(),
            post_id = rc([post.id for post in posts]),
            profile_id = rc([profile.id for profile in profiles])
        )
        comments.append(c)
    return comments

def create_genre():
    genres = []
    for _ in range(5):
        g = Genre(
            name=fake.name(),
        )
        genres.append(g)
    return genres

def create_post(profiles, genres):
    posts = []
    for _ in range(5):
        po = Post(
            song_title = fake.name(),
            artist_name = fake.name(),
            likes = randint(0, 30),
            profile_id = rc([profile.id for profile in profiles]),
            genre_id = rc([genre.id for genre in genres])
        )
        posts.append(po)
    return posts

if __name__ == '__main__':
    with app.app_context():
        print('Clearing database...')
        Profile.query.delete()
        Post.query.delete()
        Comment.query.delete()
        Genre.query.delete()

        print('Seeding profiles')
        profiles = create_profile()
        db.session.add_all(profiles)
        db.session.commit()



        print('Seeding genres...')
        genres = create_genre()
        db.session.add_all(genres)
        db.session.commit()

        print('Seeding posts...')
        posts = create_post(profiles, genres)
        db.session.add_all(posts)
        db.session.commit()

        print('Seeding comments...')
        comments = create_comments(posts, profiles)
        db.session.add_all(comments)
        db.session.commit()
        
        print('Seeding complete')



