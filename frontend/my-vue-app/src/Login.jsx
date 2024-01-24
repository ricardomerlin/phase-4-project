import { useState } from 'react'

function Login({}) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // function loginInfoTransport() {
    //     bringUsernameUp(username)
    //     bringPasswordUp(password)
    // }


    return(
        <div>
            <h1>Login with Spotify</h1>
            <h2>Email Address</h2>
            <form >
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
                <div>
                    <button className = 'signup-button'>New user? Create a new account here.</button>
                </div>
            </form>
        </div>
    )

}

export default Login
