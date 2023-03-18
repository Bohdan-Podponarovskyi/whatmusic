import React from 'react';
import './Track.scss';
import TrackLyrics from "../TrackLyrics/TrackLyrics";

const Track = (props) => {
    const { track } = props;

    return (
            <div className="track">
                <div className="search-results__list-desc">Track ID: {track.track_id}</div>
                {/*<div className="search-results__list-desc">Track ID: {track.primary_genres.music_genre_list[0].music_genre.music_genre_name}</div>*/}
                <div className="search-results__list-desc">Track: {track.track_name}</div>
                <div className="search-results__list-desc">Artist: {track.artist_name}</div>
                <div className="search-results__list-desc">Album: {track.album_name}</div>
            </div>
    );
};

export default Track;