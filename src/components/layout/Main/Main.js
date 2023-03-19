import React from 'react';
import { Route, Routes } from "react-router-dom";
import SearchInput from "../../elements/SearchInput/SearchInput";
import Home from "../../blocks/Home/Home";
import TopTenResults from "../../blocks/TopTenResults/TopTenResults";
import SearchResults from "../../blocks/SearchResults/SearchResults";
import TrackDetails from "../../blocks/TrackDetails/TrackDetails";
import Error from "../../blocks/Error/Error";
import './Main.scss';

const Main = (props) => {
    const { isDarkMode } = props;

    return (
        <div className="main">
            <Routes>
                <Route exact path="/" element={<Home isDarkMode={isDarkMode}/>} />
                <Route exact path="/top-10" element={<TopTenResults isDarkMode={isDarkMode}/>} />
                <Route path="/search" element={<SearchResults isDarkMode={isDarkMode}/>} />
                <Route path="/lyrics" element={<TrackDetails isDarkMode={isDarkMode}/>} />
                <Route path="*" element={<Error isDarkMode={isDarkMode}/>} />
            </Routes>
        </div>
    );
}

export default Main;
