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

    useEffect(() => {
        fetch('http://127.0.0.1:5555/profiles')
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
            <button className = 'signup-button' onClick = {setSignup}>New user? Login with spotify here</button>
        </div>
    )

}

export default Login
