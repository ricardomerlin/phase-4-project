import { useState, useEffect } from 'react';

import Post from './Post';

function Feed() {
  const [profiles, setProfiles] = useState([]);

  const [formData, setFormData] = useState({
    song_title: '',
    artist_name: '',
    post_description: '',
  });


  useEffect(() => {
    fetch('http://localhost:3000/profiles/')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProfiles(data);
      });
  }, []);

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

  //   fetch('http://localhost:3000/profiles/1/',{
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/json'
  //     },
  //     body:JSON.stringify(formData)
  //   })
  };

  // Hook fetch to backend, add route to post a post to a specific profile 


  // const mappedPosts = profiles.length > 0 ? profiles.map(profile => <Post key={profile.id} profile={profile} />) : null;
const mappedPosts = profiles.map(profile => (<Post key={profile.id} profile={profile}/>))

  return (
    <div>
      <h1 id='feed'>Feed</h1> 
      <div id='form'>
        <form onSubmit={handleSubmit}>
          <p>
          <label>
            Track name:
            <input
            name="song_title"
            value= {formData.song_title}
            onChange={handleInputChange}
             />
          </label>
          </p>
          <p>
          <label>
          Artist Name:
          <input
            name="artist_name"
            value={formData.artist_name}
            onChange={handleInputChange}
          />
        </label>
          </p>
          <p>
        <label>
          Post Caption:
          <input
            name="post_description"
            value={formData.post_description}
            onChange={handleInputChange}
          />
        </label>

          </p>
        <button class="btn btn-outline-light" type="submit">Post</button>
        </form>
      </div>
      {mappedPosts}
    </div>


);
}

export default Feed;