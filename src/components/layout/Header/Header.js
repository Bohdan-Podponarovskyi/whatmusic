import React, { useState } from "react";
import './Header.scss';
import Logo from "../../Logo/Logo";
import Menu from "../../Menu/Menu";

function Header(props) {
    // const [isTopTen, setIsTopTen] = useState(false);
    console.log('header', props.isTopTen)

    return(
        <div className="header">
            <Logo></Logo>
            <Menu isTopTen={props.isTopTen} onClickTopTen={(value) => props.setIsTopTen(value)}></Menu>
            {props.isTopTen ? <h1>Top 10</h1> : <h1>Default Title</h1>}
        </div>
    )
}

export default Header;