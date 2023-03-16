import React from "react";
import logo from '../../../img/logo.svg';
import './Logo.scss';
import { Link } from "react-router-dom";

const Logo = () => {

    return(
        <div className="logo">
            <Link to={`/`} className="logo__image"><img src={logo} alt="Logo"/></Link>
        </div>
    )
}

export default Logo;