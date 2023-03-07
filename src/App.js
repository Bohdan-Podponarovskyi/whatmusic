import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import "./styles/reset.scss";
import "./styles/variables.scss";
import "./styles/general.scss";
import Layout from "./components/layout/Layout/Layout";
import Home from "./components/layout/Home/Home";
import TopTen from "./components/layout/TopTen/TopTen";


const App = () => {
  return (
      <Router>
          <Routes>
              <Route exact path="/" element={<Layout><Home /></Layout>} />
              <Route path="/top-10" element={<Layout><TopTen /></Layout>} />
          </Routes>
      </Router>

  );
}

export default App;
