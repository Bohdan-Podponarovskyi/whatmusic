import React from 'react';
import { Route, Routes } from "react-router-dom";
import SearchInput from "../../elements/SearchInput/SearchInput";
import Home from "../../blocks/Home/Home";
import TopTenResults from "../../blocks/TopTenResults/TopTenResults";
import SearchResults from "../../blocks/SearchResults/SearchResults";
import TrackLyrics from "../../blocks/TrackLyrics/TrackLyrics";
import './Main.scss';

const Main = () => {

    return (
        <div className="main">
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/top-10" element={<TopTenResults />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/lyrics" element={<TrackLyrics />} />
            </Routes>
        </div>
    );
}

export default Main;
