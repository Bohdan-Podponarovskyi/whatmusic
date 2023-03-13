import React, { useState } from 'react';
import { typeOf } from 'react-is';
import axios from "axios";
import Home from '../../pages/Home/Home';
import SearchInput from "../../elements/SearchInput/SearchInput";
import SearchResults from '../../pages/SearchResults/SearchResults';
import TopTenResults from "../../pages/TopTenResults/TopTenResults";

function Main({children}) {
    // const [tracksResults, setTracksResults] = useState([]);
    // const [artistResults, setArtistResults] = useState([]);

    const handleReceivedData = (query) => {
            // // event.preventDefault();
            // console.log('Search query', query);
            // axios.get(`/api/ws/1.1/track.search?apikey=${process.env.REACT_APP_API_KEY}&q_track=${query}&page_size=10&page=5&s_track_rating=desc`)
            //     .then(response => {
            //         console.log('from Search input', response.data);
            //         setTracksResults(response.data.message.body.track_list);
            //         console.log('TracksResults', tracksResults);
            //     })
            //     .catch(error => {
            //         console.log(error);
            //     });
        }

    // const filteredChildren = React.Children.toArray(children).filter(
    //     child => !typeOf(child, SearchInput)
    // );

    return (
        <div className="main">
            {/*<SearchInput onSubmit={handleReceivedData}></SearchInput>*/}
            {/*<SearchResults tracksResults={tracksResults} setTracksResults={setTracksResults} />*/}
            {/*<TopTenResults />*/}
            {/*{filteredChildren}*/}
            {children}
        </div>
    );
}

export default Main;
// tracksResults={tracksResults} setTracksResults={setTracksResults}
