import React from "react"
import { useNavigate } from "react-router-dom"

function Card ({playlist}) {

    const navigate = useNavigate()

    const playPlaylist = (id)=> {
        navigate("/player",{state:{id:id}})
    }

    return (
       <div id='playlist-card' onClick={()=>playPlaylist(playlist.id)}>
        <img  id='user-playlists' src={playlist.images[0].url}/>
        <div id='playlist-info'>
            <p>{playlist.name}</p>
            <p>{playlist.tracks.total} Songs</p>
        </div>
       </div> 
    )
}

export default Card