import React from 'react'

function Button(props) {
    const style={
        borderColor:props.color?props.color:"rgb(238,238,238)",
        background:props.background?props.background:"rgb(238,238,238)",
        color:props.color
    }
    return (
        <p className="upgrade" style={style}>
        {props.text}
    </p>
    )
}

export default Button
