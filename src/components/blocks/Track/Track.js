import React from 'react';
import { useNavigate } from 'react-router-dom';

const Track = (props) => {
    const { track, trackId, setTrackId } = props;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/lyrics/${encodeURIComponent(track.track_id)}`);
        setTrackId(track.track_id)
        // window.location.reload();
    }

    console.log('from Track', track)
    console.log('from Track_ID', trackId)

    return (
        <div onClick={handleClick}>
            <div className="search-results__list-desc">Track ID: {track.track_id}</div>
            <div className="search-results__list-desc">Track: {track.track_name}</div>
            <div className="search-results__list-desc">Artist: {track.artist_name}</div>
            <div className="search-results__list-desc">Album: {track.album_name}</div>
        </div>
    );
};

export default Track;