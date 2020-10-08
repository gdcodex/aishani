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

    ///handling input forms using single hook state
    const [name, setname] = useState({
        first: "",
        last: ""
    });

    const InputEvent = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        setname((prev) => {
            if (name === "first") {
                return {
                    first: value,
                    last: prev.last
                };
            }
            else if (name === "last") {
                return {
                    first: prev.first,
                    last: value
                };
            }

        }

        )
    }

    //reset form
    const reset = () => {
        setname({ first: "", last: "" });
        setFname("");
    }
    const [fname, setFname] = useState("");

    const vamos = (e) => {
        e.preventDefault();
        setFname(name.first + " " + name.last);
    }
    return (
        <>
            <div className="box" style={{ "background": (Ccolor === true) ? "#FCBAD3" : "plum" }}>
                <div className="child">Hey {fname} !! </div>
                <h1 id="head" onClick={Change}>{ltime}</h1>
                <div className="child"></div>
            </div>
            <User name={name.first} N1="first" N2="last" vamos={vamos} InputEvent={InputEvent} name2={name.last} reset={reset} />
        </>
    );
}

export default App;
