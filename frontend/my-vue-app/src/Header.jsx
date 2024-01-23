import React from 'react'
import { NavLink } from "react-router-dom";

function Header() {
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
            </nav>
        </div>
    )
}

export default Header;