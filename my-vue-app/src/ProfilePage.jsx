import { useState } from "react"
import { useOutletContext } from "react-router"

function ProfilePage({  }) {

    const [profile, setProfile] = useState(0)
    // const [profId, setProfId] = useOutletContent(0)

    // // I need profID to be passed down

    // useEffect(() => {
    //     fetch('http://localhost:3000/profiles/' + profID)
    //     .then(res => res.json())
    //     .then(data => setProfile(data))
    // }, [profId])

    return (
        <div>
            <h1>This is the Profile page</h1>
        </div>
    )
}

export default ProfilePage