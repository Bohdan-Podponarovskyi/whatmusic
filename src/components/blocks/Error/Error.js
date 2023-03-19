import React from 'react';
import './Error.scss';

const Error = () => {
    return (
        <div className='error'>
            <p className='error__first-line'>Oops...</p>
            <p className='error__second-line'>something went wrong</p>
        </div>
    );
};

export default Error;