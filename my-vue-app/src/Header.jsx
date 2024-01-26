import { useState, useEffect } from 'react';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Login from './Login';
import { useOutletContext } from 'react-router-dom';


function Header({ loggedIn }) {


            // Function to handle logout
            const handleLogout = () => {
              // Your logout logic here
              // After successful logout, set loggedIn to false
                setLoggedIn(false);
                window.check = undefined
            }

            
    return (
        <ul className="nav nav-pills">
  <li className="nav-item">
    <NavLink className="nav-link" exact to="/search">
      Search
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" exact to="/feed">
      Feed
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" exact to="/liked-songs">
      Liked Songs
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" exact to="/user">
      Profile
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink
      className="nav-link"
      exact
      to="/logout"
      onClick={handleLogout}
    >
      Logout
    </NavLink>
  </li>
</ul>
    );
}

export default Header;