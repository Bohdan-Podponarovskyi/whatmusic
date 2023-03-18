// import React, { useState, useEffect } from 'react';
// import { useLocation } from "react-router-dom";
// import axios from "axios";
//
// const TrackLyrics = (props) => {
//     const [trackLyrics, setTrackLyrics] = useState('');
//
//     const location = useLocation();
//     const trackId = new URLSearchParams(location.search).get('id');
//
//     console.log('from tracklyrics_id', trackId)
//
//     useEffect( () => {
//         axios.get(`/api/ws/1.1/track.lyrics.get?track_id=${trackId}&apikey=${process.env.REACT_APP_API_KEY}`)
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
//     }, [props.trackId]);
//
//     return (
//         <div>
//             {trackLyrics && <p>{trackLyrics.lyrics_body}</p>}
//         </div>
//     );
// }
//
// export default TrackLyrics;


import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import axios from "axios";
import { ContentWrapper } from "../../elements/ContentWrapper/ContentWrapper";
import Track from "../../elements/Track/Track";

const TrackLyrics = () => {
    const [trackLyrics, setTrackLyrics] = useState([]);
    const [trackDetails, setTrackDetails] = useState([]);
    const [trackGenre, setTrackGenre] = useState([]);

    const location = useLocation();
    const trackId = new URLSearchParams(location.search).get('id');
    // const commontrackId = props.track.commontrack_id;

    console.log('from tracklyrics_id', trackId)
    // console.log('from tracklyrics_commontrackId', commontrackId)

    useEffect( () => {
        axios.get(`/api/ws/1.1/track.lyrics.get?commontrack_id=${trackId}&apikey=${process.env.REACT_APP_API_KEY}`)
            // axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${trackId}&apikey=${process.env.REACT_APP_API_KEY}`)
            // axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page_size=10&page=1&country=it&apikey=9a50ec3e16fa6c7cfc296650a7c70f4f`)
            .then(response => {
                console.log('Response_from tracklyrics', response.data)
                setTrackLyrics(response.data.message.body.lyrics);

                console.log('trackLyrics_from tracklyrics', trackLyrics)
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    useEffect( () => {
        axios.get(`/api/ws/1.1/track.get?commontrack_id=${trackId}&apikey=${process.env.REACT_APP_API_KEY}`)
            // axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${trackId}&apikey=${process.env.REACT_APP_API_KEY}`)
            // axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page_size=10&page=1&country=it&apikey=9a50ec3e16fa6c7cfc296650a7c70f4f`)
            .then(response => {
                console.log('Response_get track details', response.data)

                setTrackDetails(response.data.message.body.track);
                setTrackGenre(response.data.message.body.track.primary_genres.music_genre_list[0].music_genre.music_genre_name);

                console.log('Details_from tracklyrics', trackDetails)
                console.log('Genge_from tracklyrics', trackGenre)
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <ContentWrapper specialClass="search-results__wrapper">
        {/*<div>*/}
            {/*{trackLyrics && trackDetails && (*/}
                <div>
                    {/*<Track trackDetails={trackDetails}></Track>*/}
                    <p>{trackGenre}</p>
                    {trackLyrics.lyrics_body !== "" && <p>{trackLyrics.lyrics_body}</p>}
                    <p>{trackLyrics.lyrics_copyright}</p>
                </div>
            {/*)}*/}
            {/*{trackLyrics && <p>{trackDetails}</p>}*/}
            {/*{trackLyrics && trackLyrics.lyrics_body !== '' && <p>{trackLyrics.lyrics_body}</p>}*/}
            {/*{trackLyrics && <p>{trackLyrics.lyrics_copyright}</p>}*/}
        {/*</div>*/}
        </ContentWrapper>
    );
}

export default TrackLyrics;