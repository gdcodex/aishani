import React from 'react'
import Button from '../elements/button'
import Controlparams from '../elements/controlparams'
import './control.css'

function Controls() {
    return (
        <section className="header-container" style={{backgroundColor:"rgb(238,238,238)"}}>
        <div className="control-first">
           <Controlparams text="Style Text of colour what"/>
           <Controlparams text="Montserrat"/>
           <Controlparams text="Medium"/>
           <Controlparams text="16"/>
           <Controlparams img="./Icon-colour.svg"/>
           <Controlparams img="./Icon-highlighter.svg"/>
           <Controlparams img="./Icon-quote.svg"/>
           <Controlparams img="./Icon-align-left.svg"/>
           <Controlparams img="./Icon-align-left.svg"/>
           
        </div>
        <div className="control-second">
        <Button text="SAVE" color="black"/>
        <Button text="SEND FOR PROOF" color="rgb(81,195,216)"/>
        <Button text="PUBLISH" background="linear-gradient(to right, rgb(81,195,216) 0%, rgb(59,143,185) 100%)"/>
        </div>
        </section>
    )
}

export default Controls
