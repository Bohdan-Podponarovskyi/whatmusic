import React from "react";
// import { Link } from "react-router-dom";
import {Link, useNavigate} from 'react-router-dom';
import './TopTenButton.scss';

function TopTenButton() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`./top-10`);
        // window.location.reload();
    }

    return (
        <nav className="menu">
            {/*<Link to={`/top-10`} className="menu__link" >top-10</Link>*/}
            {/*<a href={`./top-10`} className="menu__link" onClick={handleClick}>top-10</a>*/}
            <button className="menu__link" onClick={handleClick}>top-10</button>
        </nav>
    )
}

export default TopTenButton;