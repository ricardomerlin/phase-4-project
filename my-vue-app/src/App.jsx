import Header from "./Header";
import {Outlet} from "react-router-dom"
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";


function App () {

    const clientSecret = '3634f643df5142cda8f7c01a3eafc3b9'
    const clientId = '4b154e90e2234b9299529ae79429676c' 

    const _getToken = async () => {

        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded', 
                'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });
    
        const data = await result.json();
        return data.access_token;
    }
    
    const _getPlaylist = async (token) => {
    
        const result = await fetch(`https://api.spotify.com/v1/tracks/11dFghVXANMlKmJXsNCbNl`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });
    
        const data = await result.json();
        console.log(data)
        return data;
    }

    _getToken().then(function(token) {
        _getPlaylist(token);
      })

      window.onSpotifyWebPlaybackSDKReady = () => {
        const player = new Spotify.Player({
          name: 'Web Playback SDK Quick Start Player',
          getOAuthToken: cb => { cb(clientId); }
        });
      }

    const [songs, setSongs] = useState([])

    // useEffect(()=>{
    //     fetch('')
    // },[])

    const [loggedIn, setLoggedIn] = useState(false)

    console.log(loggedIn)

    return (
        <>
            <Header loggedIn={loggedIn}/>
            <div className="main">
                <Outlet context={[
                    loggedIn, setLoggedIn
                    // [username, setUsername]
                    // [profId, setProfId]
                    ]}/>
            </div>
        </>
      )
}


export default App