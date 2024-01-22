function showProfile() {
    // Sample user information (replace with actual user data)
    const user = {
        name: 'John Doe',
        age: 25,
        email: 'john.doe@example.com',
        // Add more user information as needed
    };

    return (
        <div className='profileCard'>
            <h2>{user.name}</h2>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
            {/* Add more elements to display additional user information */}
        </div>
    );
}