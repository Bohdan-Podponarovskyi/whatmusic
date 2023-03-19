import React from 'react';
import './Copyright.scss';

const Copyright = (props) => {
    return (
        <div className="lyrics-copyright">
            {props.trackLyrics.lyrics_copyright}
        </div>
    );
};

export default Copyright;