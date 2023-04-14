import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../SearchResults/SearchResults.scss';
import Track from '../../elements/Track/Track';
import { Link } from "react-router-dom";
import { ContentWrapper } from "../../elements/ContentWrapper/ContentWrapper";
import LoadingSpinner from "../../elements/LoadingSpinner/LoadingSpinner";
import Error from "../Error/Error";
import GoBackButton from "../../elements/GoBackButton/GoBackButton";


const TopTenResults = (props) => {
    const { theme } = props;

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const [topTenTracks, setTopTenTracks] = useState([]);

    useEffect( () => {
            // axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page_size=10&page=1&country=ua&f_has_lyrics=1&apikey=${process.env.REACT_APP_API_KEY}`)
            axios.get(`/api/ws/1.1/chart.tracks.get?chart_name=top&page_size=10&page=1&country=ua&f_has_lyrics=1&apikey=${process.env.REACT_APP_API_KEY}`)
            // axios.get(`https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page_size=10&page=1&country=ua&f_has_lyrics=1&apikey=${process.env.REACT_APP_API_KEY}`)
                .then(response => {
                    if (response.data.message.body.track_list.length === 0) {
                        setError(error);
                    } else {
                        setTopTenTracks(response.data.message.body.track_list);
                        setIsLoading(false);
                    }
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
        return <Error theme={theme}/>;
    }

    return (
        <ContentWrapper specialClass="query-results">
            <h1 className="query-results__title query-results__title-top-ten">Top-10 most popular results</h1>
            {topTenTracks.length > 0 && (
                topTenTracks.map(track => (
                    <Link key={track.track.commontrack_id} to={`/lyrics?id=${encodeURIComponent(track.track.commontrack_id)}`} className="query-results__unit">
                        <Track trackDetails={track.track}></Track>
                    </Link>
                ))
            )}
            <GoBackButton theme={theme}/>
        </ContentWrapper>
    );
}

export default TopTenResults;