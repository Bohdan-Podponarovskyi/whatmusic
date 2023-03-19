import React, { useState, useEffect } from 'react';
import axios from "axios";
import './TopTenResults.scss';
import Track from '../../elements/Track/Track';
import { Link } from "react-router-dom";
import { ContentWrapper } from "../../elements/ContentWrapper/ContentWrapper";
import LoadingSpinner from "../../elements/LoadingSpinner/LoadingSpinner";
import Error from "../Error/Error";


const TopTenResults = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const [topTenTracks, setTopTenTracks] = useState([]);

    useEffect( () => {
            console.log('Before API request', topTenTracks);
            // axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page_size=10&page=1&country=ua&f_has_lyrics=1&apikey=${process.env.REACT_APP_API_KEY}`)
            axios.get(`/api/ws/1.1/chart.tracks.get?chart_name=top&page_size=10&page=1&country=ua&f_has_lyrics=1&apikey=${process.env.REACT_APP_API_KEY}`)
            // axios.get(`https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page_size=10&page=1&country=ua&f_has_lyrics=1&apikey=${process.env.REACT_APP_API_KEY}`)
                .then(response => {
                    setTopTenTracks(response.data.message.body.track_list);
                    setIsLoading(false);
                })
                .catch(error => {
                    console.log(error);
                    setError(error);
                    setIsLoading(false);
                });
    }, []);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return <Error />;
    }

    return (
        // <div className="search-results__top-ten">
            <ContentWrapper specialClass="query-results">
                {topTenTracks.length > 0 && (
                        topTenTracks.map(track => (
                            <Link key={track.track.commontrack_id} to={`/lyrics?id=${encodeURIComponent(track.track.commontrack_id)}`} className="query-results__unit">
                                <Track trackDetails={track.track}></Track>
                            </Link>
                        ))
                )}
            </ContentWrapper>
        // </div>
    );
}

export default TopTenResults;