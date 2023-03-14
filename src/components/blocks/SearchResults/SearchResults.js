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

import React from 'react';
import Track from '../Track/Track';

const SearchResults = (props) => {
    console.log('from SearchResult', props.tracksResults)
    return (
        <div className="search-results">

            {props.tracksResults.length > 0 && (
                <div className="search-results__list top-ten" id="searchResults">
                    {props.tracksResults.map(track => (
                        <Track key={track.track.track_id} track={track.track} trackId={props.trackId} setTrackId={props.setTrackId}></Track>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchResults;