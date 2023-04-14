import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import axios from "axios";
import "../../elements/TrackLyrics/TrackLyrics.scss";
import { ContentWrapper } from "../../elements/ContentWrapper/ContentWrapper";
import Track from "../../elements/Track/Track";
import TrackLyrics from "../../elements/TrackLyrics/TrackLyrics";
import Copyright from "../../elements/Copyright/Copyright";
import LoadingSpinner from "../../elements/LoadingSpinner/LoadingSpinner";
import Error from "../../blocks/Error/Error";
import GoBackButton from "../../elements/GoBackButton/GoBackButton";

const TrackDetails = (props) => {
    const { theme } = props;

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const [trackLyrics, setTrackLyrics] = useState([]);
    const [trackDetails, setTrackDetails] = useState([]);
    const [trackGenre, setTrackGenre] = useState([]);

    const location = useLocation();
    const trackId = new URLSearchParams(location.search).get("id");

    useEffect(() => {
        const trackLyricsPromise = axios.get(
            `/api/ws/1.1/track.lyrics.get?commontrack_id=${trackId}&apikey=${process.env.REACT_APP_API_KEY}`
            // `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?commontrack_id=${trackId}&apikey=${process.env.REACT_APP_API_KEY}`
            // `https://api.musixmatch.com/ws/1.1/track.lyrics.get?commontrack_id=${trackId}&apikey=${process.env.REACT_APP_API_KEY}`
        );
        const trackDetailsPromise = axios.get(
            `/api/ws/1.1/track.get?commontrack_id=${trackId}&apikey=${process.env.REACT_APP_API_KEY}`
            // `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?commontrack_id=${trackId}&apikey=${process.env.REACT_APP_API_KEY}`
            // `https://api.musixmatch.com/ws/1.1/track.get?commontrack_id=${trackId}&apikey=${process.env.REACT_APP_API_KEY}`
        );

        Promise.all([trackLyricsPromise, trackDetailsPromise])
            .then((responses) => {
                setTrackLyrics(responses[0].data.message.body.lyrics);
                setTrackDetails(responses[1].data.message.body.track);

                const genreList = responses[1].data.message.body.track.primary_genres.music_genre_list;
                const genreName = genreList.length > 0 ? genreList[0].music_genre.music_genre_name : "No information";
                setTrackGenre(genreName);

                setIsLoading(false);
            })
            .catch((error) => {
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
        <ContentWrapper specialClass="track-lyrics">
            <div>
                <Track trackDetails={trackDetails} />
                <TrackLyrics
                    trackGenre={trackGenre}
                    trackLyrics={trackLyrics}
                />
                <Copyright
                    className="track-lyrics__desc"
                    trackLyrics={trackLyrics}
                />
            </div>
            <GoBackButton theme={theme}/>
        </ContentWrapper>
    );
};

export default TrackDetails;


