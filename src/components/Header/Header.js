import React from "react";
import './Header.scss';
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";

function Header() {

    return(
        <div className="header">
            <Logo></Logo>
            <Menu></Menu>
        </div>
    )
}

export default Header;