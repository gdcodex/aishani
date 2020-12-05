import React from 'react'

function Button(props) {
    const style={
        borderColor:props.color?props.color:"rgb(238,238,238)",
        background:props.background?props.background:"rgb(238,238,238)",
        color:props.color,
        whiteSpace:"nowrap"
    }
    return (
        <p className="upgrade" style={style}>
        {props.text}
       {props.img && <img src="blue.png" alt="down" style={{marginLeft:"6px"}}/>}
    </p>
    )
}

export default Button
