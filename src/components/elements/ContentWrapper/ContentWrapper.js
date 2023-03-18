import React from 'react';
import './ContentWrapper.scss';

const ContentWrapper = (props)=> {
    let currentClass = `content-wrapper ${props.specialClass}`;

    return(
        <div className={currentClass}>
            { props.children }
        </div>
    )
}

export { ContentWrapper };