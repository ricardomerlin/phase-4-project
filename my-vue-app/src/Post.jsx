import React, { useState } from 'react';

function Post({ profile }) {
    const [likedPosts, setLikedPosts] = useState({});
    const [likes, setLikes] = useState(0)

    const handleLikeToggle = (postId) => {
        setLikedPosts((prevLikedPosts) => {
        const updatedLikedPosts = { ...prevLikedPosts };
        updatedLikedPosts[postId] = !prevLikedPosts[postId];
        return updatedLikedPosts;
        });
    };

    // function addLikes(post) {
    //     fetch (`http://localhost:3000/posts`, {
    //     method: 'PATCH',
    //     headers: {
    //         'content-type': 'application/json'
    //         },
    //     body: JSON.stringify({
    //         likes: post.likes + 1
    //     })
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         setLikes(post.likes + 1)
    //         console.log(post.likes)
    //     })
    // }


    // const mappedPosts = profile.posts.map((post) => (
    //     <div key={post.id}>
    //         <h1>Song Title: {post.song_title}</h1>
    //         <p>Artist: {post.artist_name}</p>
    //     {/* <button onClick={() => {
    //         handleLikeToggle(post.id); 
    //         addLikes(post)
    //     }}>
    //         {likedPosts[post.id] ? `Likes: ${post.likes}` : 'Like ♡'}
    //     </button> */}
    //     {/* <p>Genre: {post.genre}</p> */}
    //     {/* <h2>Comments:</h2> */}
    //     {/* <ul>
    //         {post.comments.map((comment, index) => (
    //         <li key={index}>{comment}</li>
    //         ))}
    //     </ul> */}
    //     </div>
    // ));

    return (
        <div>
        <h1>{profile.id}</h1>
        <h1></h1>
        {/* {mappedPosts} */}
        </div>
    );
}

export default Post;
