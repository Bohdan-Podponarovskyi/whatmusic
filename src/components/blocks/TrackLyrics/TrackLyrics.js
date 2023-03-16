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

const TrackLyrics = (props) => {
    const [trackLyrics, setTrackLyrics] = useState([]);
    // const [noLyricsFound, setNoLyricsFound] = useState('');

    const location = useLocation();
    const trackId = new URLSearchParams(location.search).get('id');

    console.log('from tracklyrics_id', trackId)

    useEffect( () => {
        axios.get(`/api/ws/1.1/track.lyrics.get?track_id=${trackId}&apikey=${process.env.REACT_APP_API_KEY}`)
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

    return (
        <div>
            {trackLyrics && <p>{trackLyrics.lyrics_body}</p>}
        </div>
    );
}

export default TrackLyrics;