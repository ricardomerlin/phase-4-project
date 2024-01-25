import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react'
import { useOutletContext } from "react-router-dom";

function Login() {

    const [loggedIn, setLoggedIn] = useOutletContext()
    const [showForm, setShowForm] = useState(true);
    const [profiles, setProfiles] = useState([])
    const [username, setUsername] = useState()

    const navigate = useNavigate();

    const poo = 0

    useEffect(() => {
        fetch('http://127.0.0.1:5555/profiles')
        .then(res => res.json())
        .then(data => (
            setProfiles(data)
            )
        )}, [])

    function checkUser(e) {
        e.preventDefault()
        for (let i = 0; i < profiles.length; i++) {
                // Access each profile using profiles[i]
            const user = profiles[i].username;
            if (user == username) {
                setLoggedIn(true)
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


    return (
    <div style={{ display: loggedIn ? 'none' : 'block' }}>
        <h2>Username</h2>
        <form onSubmit={checkUser}>
            <input
            type='text'
            name='username'
            className='username-input'
            onChange={(e) => setUsername(e.target.value)}
            />
            <button>Login</button>
        </form>
        <div>
            <button 
            className = 'signup-button'
            onClick = {setSignup} 
            >New user? Login with spotify here
            </button>
        </div>
    </div>
    )
}

export default Login