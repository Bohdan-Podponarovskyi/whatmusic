import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import "./styles/reset.scss";
import "./styles/variables.scss";
import "./styles/general.scss";
import BgNails from "./components/layout/BgNails/BgNails";
import Main from "./components/layout/Main/Main";
import Header from "./components/layout/Header/Header";

const App = () => {

  return (
      <Router>
          {/*<BgNails />*/}
          <Header />
          <Main />
      </Router>
  );
}

export default App;
