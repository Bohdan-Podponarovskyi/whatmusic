import React, { useState } from "react";
import './SearchInput.scss';
import axios from 'axios';


const SearchInput = (props) => {
    const [query, setQuery] = useState('');
    // const [tracks, setTracks] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        props.onSubmit(query);
        // axios.get(`/api/ws/1.1/track.search?apikey=4190e8f472c2f669cdde2b7919522fd3&q=${query}`)
        //     .then(response => {
        //         console.log(response.data);
        //         setTracks(response.data.message.body.track_list);
        //         props.onSubmit(query);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
    }

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    }

    return (
        <form method="get" className="search-form" onSubmit={handleSubmit}>
            <label htmlFor="search-input" className="search-form__input-label">
                <input id="search-input"
                       type="text"
                       className="search-form__input"
                       placeholder="Enter song / album / artist"
                       autoComplete="off"
                       value={query}
                       onChange={handleInputChange}/>
            </label>
            <button type="submit" className="search-form__button">
                <span className="search-form__button-text">search</span>
            </button>
            <div className="search-results">
                <ul className="search-results__list">
                    {tracks.map(track => (
                        <li key={track.track.track_id} className="search-results__list-item">
                            <div className="search-results__list-desc">{track.track.track_name}</div>
                            <div className="search-results__list-desc">Artist: {track.track.artist_name}</div>
                            <div className="search-results__list-desc">Album: {track.track.album_name}</div>
                            {/*<div>Genre: {track.primary_genres.music_genre_list[0].music_genre.music_genre_name}</div>*/}
                        </li>
                    ))}
                </ul>
            </div>
        </form>
    )
}

export default SearchInput;