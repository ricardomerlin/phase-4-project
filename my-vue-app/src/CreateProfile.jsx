import { useState } from 'react';
import './App.css'

function CreateProfile() {
  const [username, setUsername] = useState('');
  const [genres, setGenres] = useState([]);
  const [profilePic, setProfilePic] = useState('')
  // const [password, setPassword] = useState('')

  function toggleGenre(genre) {
    if (genres.includes(genre)) {
      setGenres(genres.filter((g) => g !== genre));
    } else {
      setGenres([...genres, genre]);
    }
  }

  function handleProfileSubmit(e) {
    e.preventDefault();
    fetch ('http://localhost:5555/profiles', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        "username": username,
        "preferred_genres": genres,
        "profile_pic": profilePic,
        "posts": []
      })
    })
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
        <h3>Select your favorite genres of music</h3>
        <div className='genreScrollMenu'>
          {/* Scrollable menu for genres */}
          <div className='scrollContainer'>
          {allGenres.map((genre) => (
            <div key={genre}>
              <label>
              <input
                type='checkbox'
                value={genre}
                checked={genres.includes(genre)}
                onChange={() => toggleGenre(genre)}
              />
              {genre}
            </label>
            </div>
          ))}
        </div>
        </div>
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
