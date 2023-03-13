import React, { useState } from "react";
import './Home.scss';
import SearchInput from "../../elements/SearchInput/SearchInput";
import axios from "axios";

const Home = (props) => {
    const [tracks, setTracks] = useState([]);
    // const [artist, setArtist] = useState([]);
    // const { tracksResults, artistResults } = props;
    // const { tracksResults, setTracksResults } = props;
    // const { artistResults, setArtistResults } = props;

    // const handleReceivedData = (query) => {
    //     console.log('Search query:', query);
    //     axios.get(`/api/ws/1.1/track.search?apikey=${process.env.REACT_APP_API_KEY}&q_track=${query}&page_size=10&page=5&s_track_rating=desc`)
    //         .then(response => {
    //             console.log('tracks', response.data);
    //             setTracks(response.data.message.body.track_list);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    //     // axios.get(`/api/ws/1.1/track.search?apikey=${process.env.REACT_APP_API_KEY}&q_artist=${query}&page_size=10&page=5&s_track_rating=desc`)
    //     //     .then(response => {
    //     //         console.log('artist',response.data);
    //     //         setArtist(response.data.message.body.track_list);
    //     //     })
    //     //     .catch(error => {
    //     //         console.log(error);
    //     //     });
    // };

    return(
        <div className="home" >
            <SearchInput tracksResults={props.tracksResults} setTracksResults={props.setTracksResults} artistResults={props.artistResults} setArtistResults={props.setArtistResults} />
            {/*<div className="search-results">*/}
            {/*    <ul className="search-results__list">*/}
            {/*        {props.tracksResults.map(track => (*/}
            {/*            <li key={track.track.track_id} className="search-results__list-item">*/}
            {/*                <div className="search-results__list-desc">{track.track.track_name}</div>*/}
            {/*                <div className="search-results__list-desc">Artist: {track.track.artist_name}</div>*/}
            {/*                <div className="search-results__list-desc">Album: {track.track.album_name}</div>*/}
            {/*            </li>*/}
            {/*        ))}*/}
            {/*    </ul>*/}
            {/*</div>*/}
            {/*<div className="search-results">*/}
            {/*    <ul className="search-results__list">*/}
            {/*        {artist.map(track => (*/}
            {/*            <li key={track.track.track_id} className="search-results__list-item">*/}
            {/*                <div className="search-results__list-desc">{track.track.track_name}</div>*/}
            {/*                <div className="search-results__list-desc">Artist: {track.track.artist_name}</div>*/}
            {/*                <div className="search-results__list-desc">Album: {track.track.album_name}</div>*/}
            {/*            </li>*/}
            {/*        ))}*/}
            {/*    </ul>*/}
            {/*</div>*/}
        </div>
    )
}

export default Home;