import React from 'react';
import { Route, Routes } from "react-router-dom";
import SearchInput from "../../elements/SearchInput/SearchInput";
import Home from "../../blocks/Home/Home";
import TopTenResults from "../../blocks/TopTenResults/TopTenResults";
import SearchResults from "../../blocks/SearchResults/SearchResults";
import TrackDetails from "../../blocks/TrackDetails/TrackDetails";
import Error from "../../blocks/Error/Error";
import './Main.scss';

const Main = () => {

    return (
        <div className="main">
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/top-10" element={<TopTenResults />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/lyrics" element={<TrackDetails />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    );
}

export default Main;
