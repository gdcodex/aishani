import React from 'react'

function Controlparams(props) {
    return (
        <div className="control-params">
       {props.text &&
        <span>{props.text}</span>
       }
       {
           props.img &&
           <img src={props.img} alt="img"/>
       }
        <img src="./dropdown.svg" alt="controls"/>
    </div>
    )
}

export default Controlparams
