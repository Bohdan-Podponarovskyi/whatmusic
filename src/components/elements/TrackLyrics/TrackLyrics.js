import React from 'react';

const TrackLyrics = (props) => {
    const { trackGenre, trackLyrics } = props;
    // console.log(trackLyrics.lyrics_body)

    return (
        <div className="track-lyrics__desc">
            <p className="track-lyrics__desc-title">Genre</p>
            <p>{trackGenre}</p>
            <p className="track-lyrics__desc-title">Lyrics</p>
            {trackLyrics && trackLyrics.lyrics_body !== undefined && trackLyrics.lyrics_body !== "" ? (
                <pre>{trackLyrics.lyrics_body}</pre>
            ) : (
                <p>No information</p>
            )}
        </div>
    );
};

export default TrackLyrics;