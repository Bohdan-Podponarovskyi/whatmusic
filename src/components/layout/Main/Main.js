import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import SearchInput from "../../elements/SearchInput/SearchInput";
import TopTenResults from "../../pages/TopTenResults/TopTenResults";
import SearchResults from "../../pages/SearchResults/SearchResults";


function Main({children}) {
    const [tracksResults, setTracksResults] = useState([]);
    console.log('Main', tracksResults)


    // const filteredChildren = React.Children.map(children, child => {
    //
    //         return React.cloneElement(child, {
    //             tracksResults,
    //             setTracksResults,
    //         });
    //
    //     // return child;
    // });

    return (
        <div className="main">
            <Routes>
                <Route exact path="/" element={<SearchInput
                    tracksResults={tracksResults}
                    setTracksResults={setTracksResults}/>} />
                <Route exact path="/top-10" element={<TopTenResults />} />
                <Route path="/search" element={<SearchResults />} />
            </Routes>
            {/*{filteredChildren}*/}
        </div>
    );
}

export default Main;
