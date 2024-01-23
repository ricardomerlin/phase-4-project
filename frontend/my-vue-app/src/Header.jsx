import { useState } from 'react'
import React from 'react'
import { NavLink } from "react-router-dom";

function Header() {

    const [loggedIn, setLoggedIn] = useState(0)

    return (
        <div id='header'>
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
                <NavLink id="user" to="/user">
                    User
                </NavLink>
                {loggedIn ?
                <NavLink id='create' to="/createprofile">
                Profile
                </NavLink>
                :
                <NavLink id='create' to="/createprofile">
                Create User Profile
                </NavLink>
                }
            </nav>
        </div>
    )
}

export default Header;