import React, { useState } from "react";
import './Main.scss';
import SearchInput from "./../SearchInput/SearchInput";
import axios from "axios";

function Main() {

    const [tracks, setTracks] = useState([]);

    const handleReceivedData = (query) => {
        console.log('Search query:', query);
        axios.get(`/api/ws/1.1/track.search?apikey=4190e8f472c2f669cdde2b7919522fd3&q_track=${query}&page_size=10&page=5&s_track_rating=desc`)
            .then(response => {
                console.log(response.data);
                setTracks(response.data.message.body.track_list);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return(
        <div className="main" >
            <SearchInput onSubmit={handleReceivedData}></SearchInput>
            <div className="search-results">
                <ul className="search-results__list">
                    {tracks.map(track => (
                        <li key={track.track.track_id} className="search-results__list-item">
                            <div className="search-results__list-desc">{track.track.track_name}</div>
                            <div className="search-results__list-desc">Artist: {track.track.artist_name}</div>
                            <div className="search-results__list-desc">Album: {track.track.album_name}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Main;