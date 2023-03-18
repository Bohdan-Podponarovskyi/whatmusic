// import React, { useEffect, useState } from 'react';
// import { Link, useLocation } from "react-router-dom";
// import Track from '../Track/Track';
// import axios from "axios";
//
// const SearchResults = () => {
//
//     const [searchResults, setSearchResults] = useState([]);
//
//     const location = useLocation();
//     const query = new URLSearchParams(location.search).get('q');
//
//     console.log('from SearchResult', query);
//
//     let tracks = '';
//
//     const [newTracks, setNewTracks] = useState(tracks);
//
//     useEffect(() => {
//         // axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${query}&page_size=10&page=1&s_track_rating=desc&f_has_lyrics=1&apikey=${process.env.REACT_APP_API_KEY}`)
//         // axios.get(`https://api.musixmatch.com/ws/1.1/track.search?q_track=${query}&page_size=10&page=1&s_track_rating=desc&f_has_lyrics=1&apikey=${process.env.REACT_APP_API_KEY}`)
//         axios.get(`/api/ws/1.1/track.search?q_track=${query}&page_size=10&page=1&s_track_rating=desc&f_has_lyrics=1&apikey=${process.env.REACT_APP_API_KEY}`)
//             .then(response => {
//                 console.log('from Search input', response.data);
//                 tracks = response.data.message.body.track_list;
//                 if (tracks.length === 0) {
//                     tracks = 'No results found';
//                     setNewTracks(tracks);
//                     console.log('No results found');
//                 } else {
//                     setSearchResults(tracks);
//                     console.log('TracksResults', tracks);
//                 }
//             })
//             .catch(error => {
//                 console.log(error);
//             });
//     }, []);
//
//     return (
//         <div className="search-results">
//             {searchResults.length > 0 && (
//                 <div className="search-results__list top-ten" id="searchResults">
//                     {searchResults.map(track => (
//                         <Link key={track.track.track_id} to={`/lyrics?id=${encodeURIComponent(track.track.track_id)}`} className="">
//                             <Track track={track.track}></Track>
//                         </Link>
//                     ))}
//                 </div>
//             )}
//             <p>{newTracks}</p>
//         </div>
//     );
// };
//
// export default SearchResults;

import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import Track from '../../elements/Track/Track';
import axios from "axios";
import './SearchResults.scss';
import { ContentWrapper } from "../../elements/ContentWrapper/ContentWrapper";

const SearchResults = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [noTracksFound, setNoTracksFound] = useState('');

    const location = useLocation();
    const query = new URLSearchParams(location.search).get('q');

    console.log('from SearchResult_query', query);

    useEffect(() => {
        axios
            .get(`/api/ws/1.1/track.search?q_track=${query}&page_size=10&page=1&s_track_rating=desc&f_has_lyrics=1&apikey=${process.env.REACT_APP_API_KEY}`)
            // axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${query}&page_size=10&page=1&s_track_rating=desc&f_has_lyrics=1&apikey=${process.env.REACT_APP_API_KEY}`)
            // axios.get(`https://api.musixmatch.com/ws/1.1/track.search?q_track=${query}&page_size=10&page=1&s_track_rating=desc&f_has_lyrics=1&apikey=${process.env.REACT_APP_API_KEY}`)
            .then((response) => {
                const tracksList = response.data.message.body.track_list;
                if (tracksList?.length > 0) {
                    setSearchResults(tracksList);
                    console.log('from SearchResult_tracksList', tracksList);
                } else {
                    setNoTracksFound('No results found');
                    console.log('No results found');
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
            <ContentWrapper specialClass="query-results">
                {searchResults.length > 0 ? (
                    searchResults.map(track => (
                        <Link key={track.track.commontrack_id} to={`/lyrics?id=${track.track.commontrack_id}`} className="query-results__unit">
                            <Track trackDetails={track.track}></Track>
                        </Link>
                    ))
                ) : (<p>{noTracksFound}</p>)}
            </ContentWrapper>
    );
};

export default SearchResults;