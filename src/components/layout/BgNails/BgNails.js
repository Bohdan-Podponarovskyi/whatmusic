import React from "react";
import bg_nail from '../../../img/bg_nail.png';
import './BgNails.scss';

function BgNails() {

    return(
        <div className="bg__nails">
            <img className="bg__nails-unit" src={bg_nail} alt=""/>
            <img className="bg__nails-unit" src={bg_nail} alt=""/>
            <img className="bg__nails-unit" src={bg_nail} alt=""/>
            <img className="bg__nails-unit" src={bg_nail} alt=""/>
        </div>
    )
}

export default BgNails;