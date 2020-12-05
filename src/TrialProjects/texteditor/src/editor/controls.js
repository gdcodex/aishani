import React from 'react'
import Button from '../elements/button'
import Controlparams from '../elements/controlparams'
import './control.css'

function Controls() {
    const format =(command,value)=>{
        document.execCommand(command, false, value);
        console.log("Hello");
    };
    return (
        <section className="header-container" style={{backgroundColor:"rgb(238,238,238)",flexFlow:"wrap",height:"auto",padding:"5px 0",overflow:"visible"}}>
        <div className="control-first">
           <Controlparams onclick={(e)=> {e.preventDefault();format('foreColor','red')}} />
           <Controlparams />
           <Controlparams />
           <Controlparams />
           <Controlparams img="./Icon-colour.svg"/>
           <Controlparams none img="./Icon-highlighter.svg"/>
           <Controlparams img="./Icon-quote.svg"/>
           <Controlparams img="./Icon-align-left.svg"/>
           <Controlparams img="./Icon-align-left.svg"/>
           
        </div>
        <div className="control-second">
        <Button text="SAVE" color="black"/>
        <Button text="SEND FOR PROOF" color="rgb(81,195,216)" img/>
        <Button text="PUBLISH" background="linear-gradient(to right, rgb(81,195,216) 0%, rgb(59,143,185) 100%)"/>
        </div>
        </section>
    )
}

export default Controls
