import { useState, useEffect } from 'react';
import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [profiles, setProfiles] = useState([])
  const [username, setUsername] = useState('')

  // Function to handle login
  
  
  useEffect(() => {
      fetch('http://127.0.0.1:5555/profiles')
      .then(res => res.json())
      .then(data => (
          setProfiles(data)
          )
    )}, [])
          
          function checkUser(e) {
            e.preventDefault()
              for (let i = 0; i < profiles.length; i++) {
                  // Access each profile using profiles[i]
                const user = profiles[i].username;
                if (user == username) {
                    setLoggedIn(true)
                }


                }
            }
            
            const handleLogin = () => {
              // Your login logic here
              // After successful login, set loggedIn to true
              setLoggedIn(true);
            }
          
            // Function to handle logout
            const handleLogout = () => {
              // Your logout logic here
              // After successful logout, set loggedIn to false
              setLoggedIn(false);
            }
            
            return (
                <div id='header'>
      {loggedIn ? (
        // Render navigation links when logged in
        <nav>
          <NavLink id="search" to="/search">
            Search
          </NavLink>
          <NavLink id="feed" to="/feed">
            Feed
          </NavLink>
          <NavLink id="liked" to="/liked-songs">
            Liked Songs
          </NavLink>
          <NavLink id='create' to="/profile">
            Profile
          </NavLink>
          <NavLink id='create' to="/logout" onClick={handleLogout}>
            Logout
          </NavLink>
        </nav>
      ) : (
        <div>
            <h2>Username</h2>
            <form onSubmit={checkUser}>
                <input
                type='text'
                name='username'
                className='username-input'
                onChange={(e) => setUsername(e.target.value)}
                />
                <button>Login</button>
            </form>
            </div>
      )}
    </div>
  );
}

export default Header;