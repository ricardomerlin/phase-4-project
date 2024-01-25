import { useState } from 'react';
import './App.css'
import { useOutletContext } from 'react-router-dom';


function CreateProfile() {
  const [username, setUsername] = useState('');
  const [genres, setGenres] = useState([]);
  const [profilePic, setProfilePic] = useState('')
  const [loggedIn, setLoggedIn] = useOutletContext()

  // const [password, setPassword] = useState('')

  console.log(window.check)

  function toggleGenre(genre) {
    if (genres.includes(genre)) {
      setGenres(genres.filter((g) => g !== genre));
    } else {
      setGenres([...genres, genre]);
    }
  }

  function handleProfileSubmit(e) {
    e.preventDefault();
    
    console.log(`Profile username: ${username}.`)
    console.log(`Profile pic URL: ${profilePic}`)

    fetch ('http://127.0.0.1:5555/profiles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'username': username,
        'profile_pic': profilePic
      })
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      // Handle the successful response, e.g., show a success message or redirect
      console.log('Profile created successfully:', data);
    })
    .catch((error) => {
      // Handle errors, e.g., show an error message
      console.error('Error creating profile:', error);
    });
}
  

  // List of music genres
  const allGenres = [
  'Alternative rock',
  'Avant-garde music',
  'Blues',
  'Children\'s music',
  'Classic rock',
  'Classical music',
  'Comedic genres',
  'Country music',
  'Dance music',
  'Disco',
  'Drum and bass',
  'Dub',
  'Easy listening',
  'Electronic dance music',
  'Electronic music',
  'Electronic rock',
  'Electronica',
  'Experimental music',
  'Folk music',
  'Funk',
  'Heavy metal',
  'Hip hop music',
  'House music',
  'Indie rock',
  'Industrial music',
  'Instrumental',
  'J-pop',
  'Jazz',
  'Jungle music',
  'Latin music',
  'Modernism',
  'New-age music',
  'Plunderphonics',
  'Pop music',
  'Pop rock',
  'Popular music',
  'Progressive music',
  'Progressive rock',
  'Punk rock',
  'Rap',
  'Reggae',
  'Rhythm and blues',
  'Rock',
  'Singing',
  'Soundtrack',
  'Soul music',
  'Techno',
  'Tejano music',
  'World music'
  ];

  return (
    <div className='profileCard'>
      <form onSubmit={handleProfileSubmit}>
        <h3>Enter a username</h3>
        <input
          type='text'
          name='username'
          placeholder='Enter desired username'
          className='username-input'
          onChange={(e) => setUsername(e.target.value)}
        />
        {/* <h3>Enter a password</h3>
        <input
          type='text'
          name='password'
          placeholder='Enter desired password'
          className='password-input'
          onChange={(e) => setPassword(e.target.value)}
        /> */}
        <h3>Link a profile picture</h3>
        <input
          type='text'
          name='profileURL'
          placeholder='Enter profile URL'
          className='profilePicInput'
          onChange={(e) => setProfilePic(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default CreateProfile;
