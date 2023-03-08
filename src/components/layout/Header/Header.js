import React, { useState } from "react";

import './Header.scss';
import Logo from "../../Logo/Logo";
import TopTenButton from "../../TopTenButton/TopTenButton";

function Header(props) {
    console.log('header', props.isTopTen)

    return(
        <div className="header">
            <Logo></Logo>
            <TopTenButton />
            {/*<TopTenButton isTopTen={props.isTopTen} onClickTopTen={(value) => props.setIsTopTen(value)}></TopTenButton>*/}
            {/*{props.isTopTen}*/}
        </div>
    )
}

export default Header;