import React from "react";

import './Header.scss';
import Logo from "../../elements/Logo/Logo";
import TopTenButton from "../../elements/TopTenButton/TopTenButton";

function Header() {

    return(
        <div className="header">
            <Logo />
            <TopTenButton />
        </div>
    )
}

export default Header;