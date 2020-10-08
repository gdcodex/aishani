import React from 'react';
import './gdai.css';




const Play=()=>{
    var props='content';
    return(
        <ul className="drop-down">
            <li className="drop-content" id="content1">{props}</li>
            <li className="drop-content" id="content2">{props}</li>
            <li className="drop-content" id="content3">{props}</li>
            <li className="drop-content" id="content4">{props}</li>
        </ul>
        
    )
}
export default Play;