

function Login() {

    return(
        <div>
            <h1>Username</h1>
            <input
            type='text'
            name='username'
            placeholder='Enter desired username'
            className='username-input'
            onChange={(e) => setUsername(e.target.value)}
            />
            <h3>Password</h3>
            <input
            type='text'
            name='password'
            placeholder='Enter desired password'
            className='password-input'
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>
    )

}

export default Login
