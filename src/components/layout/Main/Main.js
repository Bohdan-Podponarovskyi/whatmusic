import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "../../blocks/Home/Home";
import TopTenResults from "../../blocks/TopTenResults/TopTenResults";
import SearchResults from "../../blocks/SearchResults/SearchResults";
import TrackDetails from "../../blocks/TrackDetails/TrackDetails";
import Error from "../../blocks/Error/Error";
import './Main.scss';

const Main = (props) => {
    const { theme } = props;

    return (
        <div className="main">
            <Routes>
                <Route exact path="/" element={<Home theme={theme}/>} />
                <Route exact path="/top-10" element={<TopTenResults theme={theme}/>} />
                <Route path="/search" element={<SearchResults theme={theme}/>} />
                <Route path="/lyrics" element={<TrackDetails theme={theme}/>} />
                <Route path="*" element={<Error theme={theme}/>} />
            </Routes>
        </div>
    );
}

export default Main;
