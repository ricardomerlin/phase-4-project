import { useNavigate } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Login() {

    const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')
    const [profile, setProfiles] = useState('')

    const [profId, setProfId] = useOutletContext(0)


    console.log(username)
    // console.log(password)

    const navigate = useNavigate();

    const setSignup = () => {
        // Navigate to createProfilePage
        navigate('/createprofile');
    }

    const [loggedIn, setLoggedIn] = useOutletContext();

    // function changeLogStatus() {
    //     for :
    //         setLoggedIn(1)
    //     else:
    //         setLoggedIn(0)
    // }
    setLoggedIn(80)
    console.log(loggedIn)

    useEffect(() => {
        fetch('http://localhost:3000/profiles')
        .then(res => res.json())
        .then(data => (
            setProfiles(data)
            )
    )}, [])

    // useEffect(() => {
    //     for (const profile of profiles):
    //         if profile.username == username:
    //         console.log(username)
    // }, [profiles])



    return(
        <div>
            <h2>Username</h2>
            <form>
                <input
                type='text'
                name='username'
                className='username-input'
                onChange={(e) => setUsername(e.target.value)}
                />
                <h3>Password</h3>
                <input
                type='text'
                name='password'
                // placeholder='Enter desired password'
                className='password-input'
                onChange={(e) => setPassword(e.target.value)}
                />
            </form>
            <div>
                <button className = 'signup-button' onClick = {setSignup}>New user? Create a new account here.</button>
            </div>
        </div>
    )

}

export default Login
