import React, { useState } from 'react';

function Post({ profile }) {
    const [likedPosts, setLikedPosts] = useState({});
    const [likes, setLikes] = useState(0)
    const [formData, setFormData] = useState({
        comments : ''
    })

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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);

//   fetch('http://localhost:3000/profiles/1/posts/comments',{
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/json'
  //     },
  //     body:JSON.stringify(formData)
  //   })

  // Hook up backend to post a comment to specific post
      }

    const mappedPosts = profile.posts.map((post) => (
        <div id='post' key={post.id}>
            <h1>Song Title: {post.song_title}</h1>
            <p>Artist: {post.artist_name}</p>
        <button  class="btn btn-outline-light" onClick={() => {
            handleLikeToggle(post.id); 
            addLikes(post)
        }}>
            {likedPosts[post.id] ? `Likes: ${post.likes}` : 'Like ♡'}
        </button>
        <p>Genre: {post.genre}</p>
        <h2>Comments: </h2>
        <ul>
            {post.comments.map((comment, index) => (
            <li key={index}>{comment}</li>
            ))}
        </ul>
        <div>
        <form onSubmit={handleSubmit}>
            <label>
                Comment:
                <input
                value={formData.comments}
                name = 'comment'
                onChange={handleInputChange}
                />
            </label>
            <button class="btn btn-outline-light" type="submit">Submit</button>
        </form>
        </div>
        </div>
    ));


    return (
        <div>
        {mappedPosts}
        </div>
    );
}

export default Post;
