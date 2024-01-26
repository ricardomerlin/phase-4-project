import Card from "./Card"
import React from "react"
import { useOutletContext } from 'react-router-dom';

function UserProfile (){

    const {playlists} = useOutletContext()
    const {userData} = useOutletContext()
    
    return (
        <div>
            <div id='user-info'>
                <img id='profile-pic' src={userData.images[0].url}/>
                <h1 id='users-name'>{userData['display_name']}</h1>
                <h4 id='users-email'>{userData.email}</h4>
                <h5 id='users-followers'>{userData.followers.total} followers</h5>
            </div>
            <h1 style={{color:'white', margin:'20px'}}>Your Playlists!</h1> 
            <div id='user-playlists-container'>
            {playlists?.map((playlist)=><Card key={playlist.href} playlist={playlist}/>)}
            </div>
        </div>
        

  )
}

export default UserProfile