import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();

    const setSignup = () => {
        // Navigate to createProfilePage
        navigate('/createprofile');
    }

    return(
        <div>
            <h2>Username</h2>
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
                <button className = 'signup-button' onClick = {setSignup}>New user? Create a new account here.</button>
            </div>
        </div>
    )

}

export default Login
