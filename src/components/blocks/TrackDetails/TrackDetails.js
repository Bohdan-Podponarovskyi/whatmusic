// import React, { useState, useEffect } from 'react';
// import { useLocation } from "react-router-dom";
// import axios from "axios";
// import "./TrackLyrics.scss";
// import { ContentWrapper } from "../../elements/ContentWrapper/ContentWrapper";
// import Track from "../../elements/Track/Track";
// import Copyright from "../../elements/Copyright/Copyright";
//
// const TrackDetails = () => {
//     const [trackLyrics, setTrackLyrics] = useState([]);
//     const [trackDetails, setTrackDetails] = useState([]);
//     const [trackGenre, setTrackGenre] = useState([]);
//
//     const location = useLocation();
//     const trackId = new URLSearchParams(location.search).get('id');
//
//     console.log('from tracklyrics_id', trackId)
//
//     useEffect( () => {
//         axios.get(`/api/ws/1.1/track.lyrics.get?commontrack_id=${trackId}&apikey=${process.env.REACT_APP_API_KEY}`)
//             // axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${trackId}&apikey=${process.env.REACT_APP_API_KEY}`)
//             // axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page_size=10&page=1&country=it&apikey=9a50ec3e16fa6c7cfc296650a7c70f4f`)
//             .then(response => {
//                 console.log('Response_from tracklyrics', response.data)
//                 setTrackLyrics(response.data.message.body.lyrics);
//
//                 console.log('trackLyrics_from tracklyrics', trackLyrics)
//             })
//             .catch(error => {
//                 console.log(error);
//             });
//     }, []);
//
//     useEffect( () => {
//         axios.get(`/api/ws/1.1/track.get?commontrack_id=${trackId}&apikey=${process.env.REACT_APP_API_KEY}`)
//             // axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${trackId}&apikey=${process.env.REACT_APP_API_KEY}`)
//             // axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page_size=10&page=1&country=it&apikey=9a50ec3e16fa6c7cfc296650a7c70f4f`)
//             .then(response => {
//                 console.log('Response_get track details', response.data)
//
//                 setTrackDetails(response.data.message.body.track);
//                 setTrackGenre(response.data.message.body.track.primary_genres.music_genre_list[0].music_genre.music_genre_name);
//
//                 console.log('Details_from tracklyrics', trackDetails)
//                 console.log('Genge_from tracklyrics', trackGenre)
//             })
//             .catch(error => {
//                 console.log(error);
//             });
//     }, []);
//
//     return (
//         <ContentWrapper specialClass="track-lyrics">
//             <div>
//                 <Track trackDetails={trackDetails} />
//                 <p className="track-lyrics__desc">
//                     <p className="track-lyrics__desc-title">Genre </p>
//                     {trackGenre}
//                 </p>
//                 {trackLyrics.lyrics_body !== "" && <p className="track-lyrics__desc">
//                     <p className="track-lyrics__desc-title">Lyrics </p>
//                     {trackLyrics.lyrics_body}
//                 </p>}
//                 <Copyright className="track-lyrics__desc" trackLyrics={trackLyrics} />
//             </div>
//         </ContentWrapper>
//     );
// }
//
// export default TrackDetails;

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
    const { isDarkMode } = props;

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const [trackLyrics, setTrackLyrics] = useState([]);
    const [trackDetails, setTrackDetails] = useState([]);
    const [trackGenre, setTrackGenre] = useState([]);

    const location = useLocation();
    const trackId = new URLSearchParams(location.search).get("id");

    // useEffect(() => {
    //     axios
    //         .get(
    //             `/api/ws/1.1/track.lyrics.get?commontrack_id=${trackId}&apikey=${process.env.REACT_APP_API_KEY}`
    //         )
    //         .then((response) => {
    //             setTrackLyrics(response.data.message.body.lyrics);
    //             setIsLoading(false);
    //         })
    //         .catch((error) => {
    //             setError(error);
    //             setIsLoading(false);
    //         });
    // }, []);
    //
    // useEffect(() => {
    //     axios
    //         .get(
    //             `/api/ws/1.1/track.get?commontrack_id=${trackId}&apikey=${process.env.REACT_APP_API_KEY}`

    //         )
    //         .then((response) => {
    //             setTrackDetails(response.data.message.body.track);
    //             setTrackGenre(
    //                 response.data.message.body.track.primary_genres.music_genre_list[0]
    //                     .music_genre.music_genre_name
    //             );
    //         })
    //         .catch((error) => {
    //             setError(error);
    //             setIsLoading(false);
    //         });
    // }, []);

    useEffect(() => {
        const trackLyricsPromise = axios.get(
            `/api/ws/1.1/track.lyrics.get?commontrack_id=${trackId}&apikey=${process.env.REACT_APP_API_KEY}`
        );
        const trackDetailsPromise = axios.get(
            `/api/ws/1.1/track.get?commontrack_id=${trackId}&apikey=${process.env.REACT_APP_API_KEY}`
        );

        Promise.all([trackLyricsPromise, trackDetailsPromise])
            .then((responses) => {
                setTrackLyrics(responses[0].data.message.body.lyrics);
                setTrackDetails(responses[1].data.message.body.track);
                setTrackGenre(
                    responses[1].data.message.body.track.primary_genres.music_genre_list[0].music_genre.music_genre_name
                );
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
        return <Error />;
    }

    return (
        <ContentWrapper specialClass="track-lyrics">
            <div>
                <Track trackDetails={trackDetails} />
                <TrackLyrics
                    trackGenre={trackGenre}
                    trackLyrics={trackLyrics} />
                <Copyright
                    className="track-lyrics__desc"
                    trackLyrics={trackLyrics} />
            </div>
            <GoBackButton isDarkMode={isDarkMode}/>
        </ContentWrapper>
    );
};

export default TrackDetails;
