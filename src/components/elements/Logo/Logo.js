import React from "react";
import logo from '../../../img/logo.svg';
import './Logo.scss';
import { Link } from "react-router-dom";

function Logo() {

    return(
        <div className="logo">
            {/*<a className="logo__image" href="/"><img src={logo} alt="Logo"/></a>*/}
            {/*<Link to={`/`} className="logo__image"><img src={logo} alt="Logo"/></Link>*/}
        </div>
    )
}

export default Logo;