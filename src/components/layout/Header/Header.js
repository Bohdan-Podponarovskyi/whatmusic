import React from "react";

import './Header.scss';
import Logo from "../../blocks/Logo/Logo";
import TopTenButton from "../../blocks/TopTenButton/TopTenButton";

function Header() {

    return(
        <div className="header">
            <Logo></Logo>
            <TopTenButton />
        </div>
    )
}

export default Header;