import React, { useState } from "react";
import './SearchInput.scss';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlay} from '@fortawesome/free-solid-svg-icons';

const SearchInput = (props) => {

    const { theme } = props;

    const [query, setQuery] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

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
                <button type="submit" className={`button button--${theme}`}>
                    <span className="button__text button__icon"><FontAwesomeIcon icon={faPlay} size='3x'/></span>
                </button>
            </Link>
        </form>
    )
}

export default SearchInput;