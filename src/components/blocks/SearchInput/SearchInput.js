import React, { useState } from "react";
import './SearchInput.scss';
import { Link } from "react-router-dom";

const SearchInput = () => {

    const [query, setQuery] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    // console.log('from SearchInput', query)

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
            <Link to={`/search?q=${encodeURIComponent(query)}`}>
                <button type="submit" className="search-form__button">
                    <span className="search-form__button-text">search</span>
                </button>
            </Link>
        </form>
    )
}

export default SearchInput;