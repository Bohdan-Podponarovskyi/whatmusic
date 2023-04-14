import React from "react";
import { useNavigate } from "react-router-dom";

const GoBackButton = (props) => {
    const { theme } = props;
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <button className={`button button__text button__go-back button--${theme}`} onClick={handleGoBack}><span className="button__text">Go back</span></button>
    );
};

export default GoBackButton;