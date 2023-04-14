import React from 'react';
import './Copyright.scss';

const Copyright = (props) => {
    const { trackLyrics } = props;

    return (
        <div className="lyrics-copyright">
            <p className="track-lyrics__desc-title">copyright</p>
            {trackLyrics && trackLyrics.lyrics_copyright !== undefined && trackLyrics.lyrics_copyright !== "" ? (
                <p>{trackLyrics.lyrics_copyright}</p>
            ) : (
                <p>No information</p>
            )}
        </div>
    );
};

export default Copyright;