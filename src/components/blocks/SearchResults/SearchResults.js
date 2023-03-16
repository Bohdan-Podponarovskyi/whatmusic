// import React, { useEffect, Component } from 'react';
// import axios from "axios";
//
// class SearchResults extends Component {
//     const [tracksResults, setTracksResults] = useState([]);
//
//     console.log("hi from results")
//     useEffect(() => {
//         axios.get(`/api/ws/1.1/chart.tracks.get?apikey=${process.env.REACT_APP_API_KEY}&chart_name=top&page_size=10&page=1&country=it`)
//             .then(response => {
//                 console.log('from Search input', response.data);
//                 setTracksResults(response.data.message.body.track_list);
//                 console.log('from Search input', tracksResults);
//             })
//             .catch(error => {
//                 console.log(error);
//             });
//     }, []);
//
//     return (
//         <div>
//             HIIIIIIII
//         </div>
//     );
// };
//
// export default SearchResults;
// import React from 'react';
// import axios from "axios";
//
// const SearchResults  {
//
//
//     render() {
//         return (
//             <div>
// HI
//             </div>
//         );
//     }
// }
//
// export default SearchResults;

import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import Track from '../Track/Track';
import axios from "axios";

const SearchResults = (props) => {
    // console.log('from SearchResult', props.tracksResults)

    const [trackDetails, setTrackDetails] = useState([]);

    const location = useLocation();
    const query = new URLSearchParams(location.search).get('q');

    console.log('from SearchResult', query);

    let tracks = '';

    const [newTracks, setNewTracks] = useState(tracks);

    useEffect(() => {
        // axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?apikey=${process.env.REACT_APP_API_KEY}&q_track=${query}&page_size=10&page=1&s_track_rating=desc`)
        // axios.get(`https://api.musixmatch.com/ws/1.1/track.search?apikey=${process.env.REACT_APP_API_KEY}&q_track=${query}&page_size=10&page=1&s_track_rating=desc`)
        axios.get(`/api/ws/1.1/track.search?q_track=${query}&page_size=10&page=1&s_track_rating=desc&f_has_lyrics&apikey=${process.env.REACT_APP_API_KEY}`)
            .then(response => {
                console.log('from Search input', response.data);
                // setTracksResults(response.data.message.body.track_list);
                // console.log('TracksResults', tracksResults);
                // navigate(`/search?q=${encodeURIComponent(query)}`);
                tracks = response.data.message.body.track_list;
                if (tracks.length === 0) {
                    tracks = 'No results found';
                    setNewTracks(tracks);
                    console.log('No results found');
                } else {
                    setTrackDetails(tracks);
                    console.log('TracksResults', tracks);
                    // navigate(`./search?q=${encodeURIComponent(query)}`);
                }
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    // console.log('from SearchResult', trackDetails);

    return (
        <div className="search-results">
            {trackDetails.length > 0 && (
                <div className="search-results__list top-ten" id="searchResults">
                    {trackDetails.map(track => (
                        <Track key={track.track.track_id} track={track.track} trackId={props.trackId} setTrackId={props.setTrackId}></Track>
                    ))}
                </div>
            )}
            <p>{newTracks}</p>
        </div>
    );
};

export default SearchResults;