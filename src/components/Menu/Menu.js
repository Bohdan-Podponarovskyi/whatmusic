import React, { useState } from "react";
import './Menu.scss';

function Menu(props) {

    const handleClick = (event) => {
        event.preventDefault();
        props.onClickTopTen(true);
    };

    console.log('menu', props.isTopTen)

    return (
        <nav className="menu">
            <a href="/" className="menu__link" onClick={handleClick}>top-10</a>
        </nav>
    )
}

export default Menu;