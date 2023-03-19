import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGear} from '@fortawesome/free-solid-svg-icons';
import './LoadingSpinner.scss';

const LoadingSpinner = () => {
    return (
        <div className='loading-spinner'>
            <FontAwesomeIcon icon={faGear} className='loading-spinner__icon' size='5x' spin />
        </div>
    );
};

export default LoadingSpinner;