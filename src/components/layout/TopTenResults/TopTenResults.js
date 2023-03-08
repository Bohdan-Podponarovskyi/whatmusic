import React, { useState, useEffect  } from 'react';
import axios from "axios";
import './TopTenResults.scss';

const TopTenResults = (props) => {
    const [topTenTracks, setTopTenTracks] = useState([]);

    useEffect(() => {
        axios.get(`/api/ws/1.1/chart.tracks.get?apikey=4190e8f472c2f669cdde2b7919522fd3&chart_name=top&page_size=10&page=1&country=it`)
            .then(response => {
                setTopTenTracks(response.data.message.body.track_list);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className="search-results__top-ten">
            {topTenTracks.length > 0 && (
            <ul className="search-results__list top-ten" id="searchResults">
                {topTenTracks.map(track => (
                    <li key={track.track.track_id} className="search-results__list-item">
                        <div className="search-results__list-desc">{track.track.track_name}</div>
                        <div className="search-results__list-desc">Artist: {track.track.artist_name}</div>
                        <div className="search-results__list-desc">Album: {track.track.album_name}</div>
                    </li>
                ))};
            </ul>
                )}
        </div>
    );
}

export default TopTenResults;