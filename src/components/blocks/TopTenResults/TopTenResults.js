import React, { useState, useEffect } from 'react';
import axios from "axios";
import './TopTenResults.scss';
import Track from '../Track/Track';
import { Link } from "react-router-dom";

const TopTenResults = () => {
    const [topTenTracks, setTopTenTracks] = useState([]);

    useEffect( () => {
            console.log('Before API request', topTenTracks);
            // axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page_size=10&page=1&country=ua&f_has_lyrics=1&apikey=${process.env.REACT_APP_API_KEY}`)
            axios.get(`/api/ws/1.1/chart.tracks.get?chart_name=top&page_size=10&page=1&country=ua&f_has_lyrics=1&apikey=${process.env.REACT_APP_API_KEY}`)
            // axios.get(`https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page_size=10&page=1&country=ua&f_has_lyrics=1&apikey=${process.env.REACT_APP_API_KEY}`)
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
                    <Link key={track.track.track_id} to={`/lyrics?id=${encodeURIComponent(track.track.track_id)}`} className="">
                        <Track track={track.track}></Track>
                    </Link>
                ))}
            </ul>
                )}
        </div>
    );
}

export default TopTenResults;