import React from "react";
//import bg_nail from './../../img/bg_nail.png';
import './SearchInput.scss';
// import BgNails from "./../BgNails/BgNails";

function SearchInput() {

    return(
        <form action="" className="search-form">
            <label htmlFor="search-input" className="search-form__input-label">
                <input itemID="search-input" type="text" className="search-form__input"/>
            </label>
            <button type="submit" className="search-form__button">
                <span className="search-form__button-text">search</span>
            </button>
        </form>
    )
}

export default SearchInput;