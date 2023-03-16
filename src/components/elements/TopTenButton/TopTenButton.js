import React from "react";
import { Link } from 'react-router-dom';
import './TopTenButton.scss';

function TopTenButton() {

    return (
        <nav className="menu">
            <Link to={`/top-10`} className="menu__link" >top-10</Link>
        </nav>
    )
}

export default TopTenButton;