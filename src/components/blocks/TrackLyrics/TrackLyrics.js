import React, { useState, useEffect } from 'react';
import axios from "axios";

const TrackLyrics = (props) => {
    const [trackLyrics, setTrackLyrics] = useState('');
    console.log('from tracklyrics', props.tracksResults)
    console.log('from tracklyrics_id', props.trackId)
    // const trackId = props.tracksResults[0].track.track_id;

    useEffect( () => {
        // console.log('Before API request_from tracklyrics', trackLyrics);
        axios.get(`/api/ws/1.1/track.lyrics.get?track_id=${props.trackId}&apikey=${process.env.REACT_APP_API_KEY}`)
            // axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page_size=10&page=1&country=it&apikey=9a50ec3e16fa6c7cfc296650a7c70f4f`)
            .then(response => {
                console.log('Response_from tracklyrics', response.data)
                setTrackLyrics(response.data.message.body.lyrics);
                // message.body.lyrics.lyrics_body
                // message.body.lyrics.lyrics_body
                // setIsTopTenLoaded(true);

                console.log('trackLyrics_from tracklyrics', trackLyrics)
            })
            .catch(error => {
                console.log(error);
            });
        // console.log('After API request_from tracklyrics', topTenTracks);
    }, []);

    return (
        <div>
            <p>{trackLyrics.lyrics_body}</p>
        </div>
    );
}

export default TrackLyrics;