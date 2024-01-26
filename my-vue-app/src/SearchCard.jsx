import React from "react"
import { useNavigate } from "react-router-dom"

function SearchCard ({data}) {

    const navigate = useNavigate()

    const playMusic = (id)=> {
        navigate("/player",{state:{id:id}})
    }

    return (
       <div id='search-card' onClick={()=>playMusic(data.id)}>
        <img id='search-image' src={data.images[0].url}/>
        <p id= 'search-name'>{data.name}</p>
       </div> 
    )
}

export default SearchCard