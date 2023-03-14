import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import SearchInput from "../../blocks/SearchInput/SearchInput";
import TopTenResults from "../../blocks/TopTenResults/TopTenResults";
import SearchResults from "../../blocks/SearchResults/SearchResults";
import TrackLyrics from "../../blocks/TrackLyrics/TrackLyrics";


function Main({children}) {
    const [tracksResults, setTracksResults] = useState([]);
    const [trackId, setTrackId] = useState([]);
    console.log('Main', tracksResults);
    console.log('Main_iD', trackId)


    return (
        <div className="main">
            <Routes>
                <Route exact path="/" element={<SearchInput
                    tracksResults={tracksResults}
                    setTracksResults={setTracksResults}/>} />
                <Route exact path="/top-10" element={<TopTenResults />} />
                <Route path="/search" element={<SearchResults tracksResults={tracksResults} trackId={trackId} setTrackId={setTrackId}/>} />
                {/*<Route path="/lyrics/:track_id" element={<TrackLyrics trackId={tracksResults[0].track.track_id}/>} />*/}
                <Route path="/lyrics/:track_id" element={<TrackLyrics tracksResults={tracksResults} trackId={trackId}/>} />
            </Routes>
            {/*{filteredChildren}*/}
        </div>
    );
}

export default Main;
