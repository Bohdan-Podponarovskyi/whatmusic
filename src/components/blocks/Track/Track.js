import React from 'react';

const Track = (props) => {
    const { track } = props;

    return (
            <div >
                <div className="search-results__list-desc">Track ID: {track.track_id}</div>
                <div className="search-results__list-desc">Track: {track.track_name}</div>
                <div className="search-results__list-desc">Artist: {track.artist_name}</div>
                <div className="search-results__list-desc">Album: {track.album_name}</div>
            </div>
    );
};

export default Track;