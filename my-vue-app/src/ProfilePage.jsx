import { useState, useEffect } from "react"
import { useOutletContext } from "react-router"

function ProfilePage({  }) {

    const [profile, setProfile] = useState(0)
    // const [profId, setProfId] = useOutletContent(0)

    // // I need profID to be passed down

    useEffect(() => {
        fetch('http://127.0.0.1:5555/profiles/' + window.check)
        .then(res => res.json())
        .then(data => {
            setProfile(data)
            console.log(data)
        })
    }, [])

    return (
        <div>
            <img src={profile.profile_pic}></img>
            <h1>{profile.username}</h1>
            <h1>{profile.liked_genres}</h1>
        </div>
    )
}

export default ProfilePage