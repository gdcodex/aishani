import React, { useState } from 'react';
import './time.css';
import User from './user';




const App = () => {
    ////showing real-time using hooks with the help of setInterval function
    let Time = new Date().toLocaleTimeString();
    const [ltime, setltime] = useState(Time);
    const Update = () => {
        Time = new Date().toLocaleTimeString();
        setltime(Time);
    };
    setInterval(Update, 1000);


    //changing styles using inline styling using hooks
    const [Ccolor, setColor] = useState(true);
    const Change = () => {
        setColor(!Ccolor);
    };

   ///first input
    const [name, setname] = useState("");

    const InputEvent = (event) => {
        console.log(event);
        setname(event.target.value);
    }
    //second input
    const [name2, setname2] = useState("");

    const InputEvent2 = (event) => {
        console.log(event);
        setname2(event.target.value);
    }
    //reset form
    const reset = () =>{
        setname("");
        setname2("");
        setFname("");
    }
    const [fname, setFname] = useState("");

    const vamos = (e) => {
        e.preventDefault();
        setFname(name+" "+name2);
    }
    return (
        <>
            <div className="box" style={{"background":(Ccolor==true)?"#FCBAD3":"plum"}}>
                <div className="child">Hey {fname} !! </div>
                <h1 id="head" onClick={Change}>{ltime}</h1>
                <div className="child"></div>
            </div>
           <User name={name} vamos={vamos} InputEvent={InputEvent} name2={name2} InputEvent2={InputEvent2} reset={reset}/>
        </>
    );
}

export default App;
    // const Change=()=>{

    //     const element = document.querySelector('.box');
    //      if(element.style.background!="plum")element.style.background="plum";
    //      else element.style.background="white";

    // }