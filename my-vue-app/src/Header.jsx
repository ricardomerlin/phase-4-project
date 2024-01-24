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
                {loggedIn ?
                <NavLink id='create' to="/profile">
                Profile
                </NavLink>
                :
                <NavLink id='create' to="/login">
                Sign in
                </NavLink>
                }
                {loggedIn ?
                <NavLink id='create' to="/profile">
                Logout
                </NavLink>
                :
                null
                }
            </nav>
        </div>
    )
}

export default Header;