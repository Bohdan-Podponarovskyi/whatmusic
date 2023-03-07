import React, { useState } from "react";
import './SearchInput.scss';


const SearchInput = (props) => {
    const [query, setQuery] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        props.onSubmit(query);
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
                       onChange={handleInputChange}
                />
            </label>
            <button type="submit" className="search-form__button">
                <span className="search-form__button-text">search</span>
            </button>
        </form>
    )
}

export default SearchInput;