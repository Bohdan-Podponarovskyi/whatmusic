import React from 'react';
import './Error.scss';
import GoBackButton from "../../elements/GoBackButton/GoBackButton";

const Error = (props) => {
    const { theme } = props;

    return (
        <div className='error'>
            <p className='error__first-line'>Oops...</p>
            <p className='error__second-line'>something went wrong</p>
            <GoBackButton theme={theme}/>
        </div>
    );
};

export default Error;