import { useState, useEffect } from 'react';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Login from './Login';
import { useOutletContext } from 'react-router-dom';


function Header({ loggedIn }) {


            
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
                window.check = undefined
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
                null
            )}
        </div>
    );
}

export default Header;