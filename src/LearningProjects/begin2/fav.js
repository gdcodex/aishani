
import React, {useState} from 'react';
import Flay from "./flay";





const Gav = ({name,props}) => {



    return (
        <>
        <div className="top">
        <div id="nav-ul">
            <h4 className="nav-li" id="nav-li1">{name}</h4>
        </div>
        <Flay props={props}/>
        </div>
        </>

    )
}
export default Gav;

