import React from "react";

import './Header.scss';
import Logo from "../../Logo/Logo";
import TopTenButton from "../../TopTenButton/TopTenButton";

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