import React from 'react';

const TrackLyrics = (props) => {
    return (
        <div className="track-lyrics__desc">
            <p className="track-lyrics__desc-title">Genre</p>
            <p>{props.trackGenre}</p>
            <p className="track-lyrics__desc-title">Lyrics</p>
            {/*{props.trackLyrics.lyrics_body !== "" && (*/}
            {/*    <p>{props.trackLyrics.lyrics_body}</p>*/}
            {/*)}*/}
            {props.trackLyrics.lyrics_body && props.trackLyrics.lyrics_body !== "" ? (
                <p>{props.trackLyrics.lyrics_body}</p>
            ) : (
                <p>No information</p>
            )}
        </div>
    );
};

export default TrackLyrics;