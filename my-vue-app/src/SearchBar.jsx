import React, {useState} from "react"
import App from "./App"
import { useOutletContext} from "react-router-dom";
import SearchCard from "./SearchCard";

function SearchBar (){

    const {search} = useOutletContext()
    const {handleSearch} = useOutletContext()
    const {setFilter} = useOutletContext()
    const {filter} = useOutletContext()
    const {searchedData} = useOutletContext()

    function handleSearchChange(e){
        handleSearch(e.target.value)
    }

    function handleOnChange(e){
        setFilter(e.target.value)
    }

    return (
    <div>
        <div className="search-container">
            <div >
                <div id='dropdown'>
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
                </div>
                <i className="search-box" />
                <div id='search-container'>
                {searchedData?.map((data)=><SearchCard key={data.id} data={data}/>)}
                </div>
            </div>
        </div>
    </div>
    )
}

export default SearchBar