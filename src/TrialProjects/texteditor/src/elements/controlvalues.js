import React from 'react'
import './list.css'
function Controlvalues(props) {
    const set=(e)=>{
        console.log(e.target);
    }
    return (
        <div className="values">
            <ul className="list">
                {props.values.map((e,i)=><li className="list-values" onClick={set} key={i}>{e}</li>)}
            </ul>
        </div>
    )
}

export default Controlvalues
