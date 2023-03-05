import React from "react";
import logo from './../../img/logo.svg';
import './Logo.scss';

function Logo() {

    return(
        <div className="logo">
            <a className="logo__image" href="/"><img src={logo} alt="Logo"/></a>
        </div>
    )
}

export default Logo;