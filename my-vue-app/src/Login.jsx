import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react'

function Login({loggedIn,setLoggedIn, handleSpotifyLogin}) {

    
    const [showForm, setShowForm] = useState(true);
    const [profiles, setProfiles] = useState([])
    const [username, setUsername] = useState()

    const navigate = useNavigate();

    const poo = 0

    // useEffect(() => {
    //     fetch('http://127.0.0.1:5555/profiles')
    //     .then(res => res.json())
    //     .then(data => (
    //         setProfiles(data)
    //         )
    //     )}, [])

    function checkUser(e) {
        e.preventDefault()
        for (let i = 0; i < profiles.length; i++) {
                // Access each profile using profiles[i]
            const user = profiles[i].username;
            if (user == username) {
                setLoggedIn(true)

                console.log('check user is working')
                window.check = profiles[i].id
            }}
        }

    const handleSignupClick = () => {
        setShowForm(false);
        // Additional logic for signup if needed
    }

    const setSignup = () => {
        // Navigate to createProfilePage
        navigate('/createprofile');
        handleSignupClick()
    }

    function handleClick(){
        setLoggedIn(true)
        handleSpotifyLogin()
    }


    return (
    <div id='login-container' style={{ display: loggedIn ? 'none' : 'block' }}>
        <form onSubmit={checkUser}>
            <input
            type='text'
            name='username'
            className='username-input'
            onChange={(e) => setUsername(e.target.value)}
            />
            <button>Login</button>
        </form>
        <div id='login'>
            <button 
            class="btn btn-outline-light"
            onClick = {()=>handleClick()} 
            >Login with spotify here
            </button>
        </div>
    </div>
    )
}

export default Login