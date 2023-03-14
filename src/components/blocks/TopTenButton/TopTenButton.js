import React from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './TopTenButton.scss';

function TopTenButton() {
    const navigate = useNavigate();

    const handleClick = () => {
        // navigate(`/top-10`);
        // window.location.reload();
    }

    return (
        <nav className="menu">
            <a href={`/top-10`} className="menu__link" onClick={handleClick}>top-10</a>
        </nav>
    )
}

export default TopTenButton;