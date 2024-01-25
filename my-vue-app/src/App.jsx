import axios from "axios";
import Header from "./Header";
import {Outlet, useLocation} from "react-router-dom"
import WelcomePage from "./WelcomePage";
import { useEffect, useState } from "react";
import SpotifyPlayer from "./Player";
import HandleLogin from "./HandleLogin";

function App () {
    
    const location = useLocation();
    const accessToken = location.state?.code;
    const clientSecret = '3634f643df5142cda8f7c01a3eafc3b9'
    const CLIENT_ID = '4b154e90e2234b9299529ae79429676c'
    const REDIRECT_URI = 'http://localhost:5173' 
    const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
    const RESPONSE_TYPE = 'token';
    const SCOPES = 'user-read-private user-read-email user-library-read streaming';

    const [search, setSearch] = useState("")
    const [filter,setFilter] = useState('')
    const [token,setToken] = useState('')
    const [playlists, setPlaylists] = useState(null)

    const handleLogin = () => {
        window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${encodeURIComponent(SCOPES)}`;
    };
    
    const apiClient = axios.create({
        baseURL:"https://api.spotify.com/v1/"
    })

    const setClientToken = (token) => {
        apiClient.interceptors.request.use(async function (config){
            config.headers.Authorization = 'Bearer ' + token
            return config
        })
    } 

    useEffect(()=>{
        if (token) {
            setClientToken(token); 
            apiClient.get('me/playlists',{
                headers:{
                    'Authorization' : `Bearer ${token}`
                }
            }).then(function (res){
                setPlaylists(res.data.items);
                console.log(res.data.items)
            }).catch(error => console.log(error));
        }
    },[token])

    const [songs, setSongs] = useState([])

    useEffect(()=>{  
        const token = window.localStorage.getItem('token')
        const hash = window.location.hash
        if (!token && hash){
            const _token = hash.split('&')[0].split("=")[1]
            window.localStorage.setItem('token', _token)
            setToken(_token)
            setClientToken(_token)
        } else {
            setToken(token)
            setClientToken(token)
        }
    },[])
    
    function replaceSpacesWithPlus(inputString) {
        const replacedString = inputString.replace(/ /g, '+');
        return replacedString;
    }

    const [loggedIn, setLoggedIn] = useState(false)

    console.log(loggedIn)

    useEffect(()=>{
        
        fetch(`https://api.spotify.com/v1/search?q=${replaceSpacesWithPlus(search)}&type=${filter}`,{
            headers:{
                'Authorization' : `Bearer ${token}`
            }
        }).then((res)=>{
            console.log(res)
            console.log(search)
            console.log(filter)
        })
    },[search])


    // const filteredSongs = search.trim() === ""
    // ? []
    // : songs.filter(song => song.name.toLowerCase().includes(search.toLowerCase()))

    function handleSearch(searchTerm){
        setSearch(searchTerm)
    }

    return !token ? (
        <>
        <HandleLogin />
        <button onClick={handleLogin}>Login with Spotify</button>
        </>
    ) : (
        <>
            < Header loggedIn={loggedIn}/>
            <SpotifyPlayer accessToken={token}/>
            <div className="main">
                <Outlet context={{CLIENT_ID, handleSearch, search, setFilter, filter,loggedIn, setLoggedIn}}/>
            </div>
        </>
      )
}


export default App