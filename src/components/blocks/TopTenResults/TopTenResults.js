import React, { useState, useEffect } from 'react';
import axios from "axios";
import './TopTenResults.scss';
import Track from '../Track/Track';

const TopTenResults = (props) => {
    const [topTenTracks, setTopTenTracks] = useState([]);

    useEffect( () => {
            console.log('Before API request', topTenTracks);
            axios.get(`/api/ws/1.1/chart.tracks.get?chart_name=top&page_size=10&page=1&country=ua&apikey=${process.env.REACT_APP_API_KEY}`)
                // axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page_size=10&page=1&country=it&apikey=9a50ec3e16fa6c7cfc296650a7c70f4f`)
                .then(response => {
                    setTopTenTracks(response.data.message.body.track_list);
                    // setIsTopTenLoaded(true);
                    console.log('Response', response.data)
                })
                .catch(error => {
                    console.log(error);
                });
        console.log('After API request', topTenTracks);
    }, []);

    return (
        <div className="search-results__top-ten">
            {topTenTracks.length > 0 && (
            <ul className="search-results__list top-ten" id="searchResults">
                {topTenTracks.map(track => (
                    <Track key={track.track.track_id} track={track.track} trackId={props.trackId} setTrackId={props.setTrackId}></Track>
                ))}
            </ul>
                )}
        </div>
    );
}

export default TopTenResults;


// import React, { Component } from 'react';
// import axios from 'axios';
// import './TopTenResults.scss';
//
// class TopTenResults extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             topTenTracksList: []
//         };
//     }
//
//     componentDidMount() {
//         console.log('Before API request', this.state.topTenTracksList);
//         axios
//             .get(
//                 `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page_size=10&page=1&country=it&apikey=9a50ec3e16fa6c7cfc296650a7c70f4f`
//             )
//             .then((response) => {
//                 console.log('response data' ,response.data);
//                 this.setState({ topTenTracksList: response.data.message.body.track_list });
//                 console.log("After API request", this.state.topTenTracksList)
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     }
//
//     render() {
//         return (
//             <div className="search-results__top-ten">
//                 {this.state.topTenTracksList.length > 0 && (
//                     <ul className="search-results__list top-ten" id="searchResults">
//                         {this.state.topTenTracksList.map((track) => (
//                             <li key={track.track.track_id} className="search-results__list-item">
//                                 <div className="search-results__list-desc">Track: {track.track.track_name}</div>
//                                 <div className="search-results__list-desc">Artist: {track.track.artist_name}</div>
//                                 <div className="search-results__list-desc">Album: {track.track.album_name}</div>
//                             </li>
//                         ))}
//                     </ul>
//                 )}
//             </div>
//         );
//     }
// }
//
// export default TopTenResults;
