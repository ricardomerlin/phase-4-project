import { useState, useEffect } from 'react'
import Post from './Post'

function Feed() {

    const[profiles, setProfiles] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/profiles')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setProfiles(data)
        })    
    }, [])


    const mappedProfiles = profiles.map(profile => <Post profile={profile}/>)
    return (
        <div>
            {mappedProfiles}
        </div>
    )
}

export default Feed