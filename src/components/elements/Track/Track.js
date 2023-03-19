import React from 'react';
import './Track.scss';
import '../../../styles/variables.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faMicrophone, faRecordVinyl } from '@fortawesome/free-solid-svg-icons';
// import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
// import { library } from '@fortawesome/fontawesome-svg-core'


const Track = (props) => {
    const { trackDetails } = props;

    // library.add(faAlbum);

    return (
            <div className="track-details">
                <p className="track-details__unit"><FontAwesomeIcon icon={faMusic} className="track-details__icon"/>{trackDetails.track_name}</p>
                <p className="track-details__unit track-details__unit--artist"><FontAwesomeIcon icon={faMicrophone} className="track-details__icon"/>{trackDetails.artist_name}</p>
                <p className="track-details__unit"><FontAwesomeIcon icon={faRecordVinyl} className="track-details__icon"/>{trackDetails.album_name}</p>
            </div>
    );
};

export default Track;