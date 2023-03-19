import React, { useState } from "react";
import { HashRouter as Router } from 'react-router-dom'

import "./styles/reset.scss";
import "./styles/variables.scss";
import "./styles/general.scss";
import BgNails from "./components/layout/BgNails/BgNails";
import Main from "./components/layout/Main/Main";
import Header from "./components/layout/Header/Header";

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

  return (
      <Router>
          <div className={`theme-wrapper ${isDarkMode ? 'theme-wrapper--dark' : 'theme-wrapper--light'}`}>
              {/*<BgNails />*/}
              <Header />
              <Main isDarkMode={isDarkMode}/>
              <button className={`button button__theme ${isDarkMode ? 'button--dark' : 'button--light'}`} onClick={toggleDarkMode}>
                  <span className="button__text" >{isDarkMode ? "turn on" : "turn off"}</span>
              </button>
          </div>
      </Router>
  );
}

export default App;
