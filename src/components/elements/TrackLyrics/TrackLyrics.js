import React from 'react';

const TrackLyrics = (props) => {
    return (
        <div className="track-lyrics__desc">
                <p className="track-lyrics__desc-title">Genre</p>
                <p>{props.trackGenre}</p>
            {/*{props.trackLyrics.lyrics_body !== "" && (*/}
                <p className="track-lyrics__desc-title">Lyrics</p>
                <p>{props.trackLyrics.lyrics_body}</p>
            {/*)}*/}
        </div>
    );
};

export default TrackLyrics;