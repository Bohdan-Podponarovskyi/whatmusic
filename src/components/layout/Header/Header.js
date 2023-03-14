import React from "react";

import './Header.scss';
import Logo from "../../blocks/Logo/Logo";
import TopTenButton from "../../blocks/TopTenButton/TopTenButton";
// import { Link } from "react-router-dom";

function Header() {
    // console.log('header', props.isTopTen)

    return(
        <div className="header">
            <Logo></Logo>
            <TopTenButton />
        </div>
    )
}

export default Header;