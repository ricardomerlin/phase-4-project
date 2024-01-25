import { useState, useEffect } from 'react';
import Post from './Post';

function Feed() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5555/posts')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProfiles(data);
      });
  }, []);

  const mappedPosts = profiles.length > 0 ? profiles.map(profile => <Post key={profile.id} profile={profile} />) : null;

  return (
    <div>
      <h1>hi</h1>
      {mappedPosts}
    </div>
  );
}

export default Feed;