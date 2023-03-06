import React, { useState } from "react";
import './SearchInput.scss';
import axios from 'axios';


function SearchInput() {
    const [query, setQuery] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        axios.get(`https://api.musixmatch.com/ws/1.1/track.search?apikey=4190e8f472c2f669cdde2b7919522fd3&q_artist=${query}`)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    function handleInputChange(event) {
        setQuery(event.target.value);
    }

    return (
        <form method="get" className="search-form" onSubmit={handleSubmit}>
            <label htmlFor="search-input" className="search-form__input-label">
                <input id="search-input"
                       type="text"
                       className="search-form__input"
                       placeholder="Enter song / album / artist"
                       value={query}
                       onChange={handleInputChange}/>
            </label>
            <button type="submit" className="search-form__button">
                <span className="search-form__button-text">search</span>
            </button>
        </form>
    )
}

export default SearchInput;