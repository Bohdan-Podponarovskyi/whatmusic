import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import "./styles/reset.scss";
import "./styles/variables.scss";
import "./styles/general.scss";
import BgNails from "./components/layout/BgNails/BgNails";
import Main from "./components/layout/Main/Main";
import Home from "./components/pages/Home/Home";
import Header from "./components/layout/Header/Header";
// import SearchInput from "./components/elements/SearchInput/SearchInput";
import TopTenResults from "./components/pages/TopTenResults/TopTenResults";
// import SearchResults from "./components/pages/SearchResults/SearchResults";

const App = () => {
    // const [tracksResults, setTracksResults] = useState([]);

  return (
      // <div>
      <Router>
          <BgNails />
          <Header />
          {/*<TopTenResults />*/}
          <Main>
              <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/top-10" element={<TopTenResults />} />
                  {/*<Route exact path="/search" element={<SearchResults />} />*/}
              </Routes>
          </Main>
      </Router>
      // </div>

  );
}

export default App;
