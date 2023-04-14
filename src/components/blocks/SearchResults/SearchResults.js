import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import Track from '../../elements/Track/Track';
import axios from "axios";
import './SearchResults.scss';
import { ContentWrapper } from "../../elements/ContentWrapper/ContentWrapper";
import LoadingSpinner from "../../elements/LoadingSpinner/LoadingSpinner";
import Error from "../Error/Error";
import GoBackButton from "../../elements/GoBackButton/GoBackButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBackward, faForward} from '@fortawesome/free-solid-svg-icons';

const SearchResults = (props) => {
    const { theme } = props;

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const [searchResults, setSearchResults] = useState([]);
    const [noTracksFound, setNoTracksFound] = useState('');

    const location = useLocation();
    const query = new URLSearchParams(location.search).get('q');

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        axios.get(`/api/ws/1.1/track.search?q_track=${query}&page_size=30&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_API_KEY}`)
        //     axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${query}&page_size=30&page=1&s_track_rating=desc&f_has_lyrics=1&apikey=${process.env.REACT_APP_API_KEY}`)
        //     axios.get(`https://api.musixmatch.com/ws/1.1/track.search?q_track=${query}&page_size=10&page=1&s_track_rating=desc&f_has_lyrics=1&apikey=${process.env.REACT_APP_API_KEY}`)
            .then((response) => {
                const responseBody = response.data.message.body;
                if (!responseBody || !responseBody.track_list) {
                    setError(error);
                    setIsLoading(false);
                }
                if (responseBody.track_list.length === 0) {
                    setNoTracksFound('No results found');
                    setIsLoading(false);
                }
                else {
                    setSearchResults(responseBody.track_list);
                    setIsLoading(false);
                    setTotalPages(Math.ceil(responseBody.track_list.length / 10));
                }
            })
            .catch((error) => {
                console.log(error);
                setError(error);
                setIsLoading(false);
            });
    }, []);

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(prevPage => prevPage + 1);
        }
    };

    const startIndex = (page - 1) * 10;
    const endIndex = startIndex + 10;
    const currentResults = searchResults.slice(startIndex, endIndex);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return <Error theme={theme}/>;
    }

    return (
        <ContentWrapper specialClass="query-results">
            {currentResults.length > 0 ? (
                <>
                    <h1 className="query-results__title">
                        <span>{`Result for <${query}>`}</span>
                        <span className="query-results__page-no">{`Page ${page} of ${totalPages}`}</span>
                    </h1>

                    {currentResults.map(track => (
                        <Link key={track.track.commontrack_id} to={`/lyrics?id=${track.track.commontrack_id}`} className="query-results__unit">
                            <Track trackDetails={track.track}></Track>
                        </Link>
                    ))}
                    <div className="query-results__pagination">
                        <button className={`button button__small button--${theme}`} onClick={handlePrevPage} disabled={page === 1}>
                            <span className="button__text button__icon"><FontAwesomeIcon icon={faBackward} size='2x'/></span>
                        </button>
                        <GoBackButton theme={theme}/>
                        <button className={`button button__small button--${theme}`} onClick={handleNextPage} disabled={page === totalPages}>
                            <span className="button__text button__icon"><FontAwesomeIcon icon={faForward} size='2x'/></span>
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <p className="query-results__not-found">{noTracksFound}</p>
                    <GoBackButton theme={theme}/>
                </>
            )}
        </ContentWrapper>
    );
};

export default SearchResults;