import React from "react";
import { HashRouter as Router } from 'react-router-dom'

import "./styles/reset.scss";
import "./styles/variables.scss";
import "./styles/general.scss";
import Main from "./components/layout/Main/Main";
import Header from "./components/layout/Header/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

import useDarkMode from "./hooks/useDarkMode";


const App = () => {

    const [theme, toggleTheme] = useDarkMode();

    return (
        <Router>
            <div className={`theme-wrapper theme-wrapper--${theme}`} />
            <Header />
            <Main theme={theme} />
            <div className='button__theme-wrapper'>
                <button className={`button button__theme button--${theme}`} onClick={toggleTheme}>
                    <span className="button__text"><FontAwesomeIcon className="button__theme-icon" icon={faLightbulb} size='4x'/></span>
                </button>
            </div>
        </Router>
    );
}

export default App;
