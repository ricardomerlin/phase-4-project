import React from 'react';

function Post({ profile }) {
    const mappedPosts = profile.posts.map(post => (
        <div key={post.id}>
            <h1>Song Title: {post.song_title}</h1>
            <p>Artist: {post.artist_name}</p>
            <p>Likes: {post.likes}</p>
            <p>Genre: {post.genre}</p>
            <h2>Comments:</h2>
            <ul>
                {post.comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                ))}
            </ul>
        </div>
    ));

    return (
        <div>
            <h1>{profile.username}</h1>
            {mappedPosts}
        </div>
    );
}

export default Post;