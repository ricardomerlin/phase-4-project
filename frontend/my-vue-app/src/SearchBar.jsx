import React, {useState} from "react"
import App from "./App"
import { useOutletContext} from "react-router-dom";

function SearchBar (){

    const {search} = useOutletContext()
    const {handleSearch} = useOutletContext()
    const {setFilter} = useOutletContext()
    const {filter} = useOutletContext()

    function handleSearchChange(e){
        handleSearch(e.target.value)
    }

    function handleOnChange(e){
        setFilter(e.target.value)
    }

    // const listSearch = filteredSongs.map((song)=>{
    //     return <div>
    //         <h1 className="search-results"onClick={() => handleClick(song)}>{song.name}</h1>
    //     </div>
    // })
    

    return (
    <div>
        <div className="search-container">
            <div >
                <select onChange={handleOnChange} value={filter} name="day">
                    <option value="" disabled selected hidden>Choose filter</option>
                    <option value ='artist'>Artist</option>
                    <option value='album'>Album</option>
                    <option value='track'>Track</option>
                    <option value='playlist'>Playlist</option>
                </select>
                <input 
                onChange={handleSearchChange}
                className="prompt"
                placeholder="Search by artist/track/album name..."
                value={search}
                />
                <i className="search-box" />
                {/* {listSearch} */}
            </div>
        </div>
    </div>
    )
}

export default SearchBar