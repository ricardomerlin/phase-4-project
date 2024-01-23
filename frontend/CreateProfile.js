function showProfile() {
    // Sample user information (replace with actual user data

    return (
        <div className='profileCard'>
            <input 
                type = 'text' 
                name = 'username'
                placeholder = 'Enter desired username'
                class-name = 'username-input'
            />
            <input
                type = 'dropdown'
                name = 'Genres'
                placeholder = 'Share your thoughts!'
                classname = 'thoughts-input'
            />
            <input
                type = 'button'
                name = 'submit'
                value = 'Create new profile'
            />
        </div>
    );
}