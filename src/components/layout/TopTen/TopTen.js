import React, { useState } from 'react';
import axios from "axios";
import './TopTen.scss';
// import Menu from "../../Menu/Menu";

const TopTen = (props) => {
    const [topTenTracks, setTopTenTracks] = useState([]);

    console.log('top-ten', props.isTopTen);

    const handleClick = () => {
        props.setIsTopTen(true);
        console.log(props.isTopTen);
        axios.get(`/api/ws/1.1/chart.tracks.get?apikey=4190e8f472c2f669cdde2b7919522fd3&chart_name=top&page_size=10&page=1&country=it`)
            .then(response => {
                console.log(response.data);
                setTopTenTracks(response.data.message.body.track_list);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="search-results">
            <button onClick={handleClick}>Get Top Ten Tracks</button>
            <ul className="search-results__list top-ten" id="searchResults">
                {topTenTracks.map(track => (
                    <li key={track.track.track_id} className="search-results__list-item">
                        <div className="search-results__list-desc">{track.track.track_name}</div>
                        <div className="search-results__list-desc">Artist: {track.track.artist_name}</div>
                        <div className="search-results__list-desc">Album: {track.track.album_name}</div>
                    </li>
                ))};
            </ul>
        </div>
    );
}

export default TopTen;