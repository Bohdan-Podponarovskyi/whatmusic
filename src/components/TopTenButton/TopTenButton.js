import React, { useState } from "react";
import { Link } from "react-router-dom";
import './TopTenButton.scss';

function TopTenButton(props) {

    // const handleClick = (event) => {
    //     event.preventDefault();
    //     props.onClickTopTen(true);
    // };
    //
    // console.log('menu', props.isTopTen)

    return (
        <nav className="menu">
            <Link to={`/top-10`} className="menu__link">top-10</Link>
            {/*<a href="/" className="menu__link" onClick={handleClick}>top-10</a>*/}
        </nav>
    )
}

export default TopTenButton;