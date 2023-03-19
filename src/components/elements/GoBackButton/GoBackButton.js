import React from "react";
import { useNavigate } from "react-router-dom";

const GoBackButton = (props) => {
    const { isDarkMode } = props;
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <button className={`button button__text button__go-back ${isDarkMode ? 'button--dark' : 'button--light'}`} onClick={handleGoBack}>Go back</button>
    );
};

export default GoBackButton;