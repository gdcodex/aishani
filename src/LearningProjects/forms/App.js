import React, { useState } from 'react';
import './time.css';
import User from './user';
import InstagramIcon from '@material-ui/icons/Instagram';




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
        last: "",
        places:"",
        hobby:"",
        food:"",
        song:""
    });

    const InputEvent = (event) => {
        // const value = event.target.value;
        // const name = event.target.name;
        const {value, name} = event.target;

        setname((prev) => {   //setValue also takes an callback function which takes previous value as an argument
            return{           // thus helps to procure previous state of the item
                ...prev,
                [name]:value
            }

        }

        )
    }

    //reset form
    const reset = () => {
        setname({
            first: "",
            last: "",
            places:"",
            hobby:"",
            food:"",
            song:""
        }); //resets all the fields
        setFname("");
    };

    ///for displaying input content on nav
    const [fname, setFname] = useState("");

    const vamos = (e) => { ///this function is called on submission
        e.preventDefault();
        setFname(name.first + " " + name.last);
        setname({
            first: "",
            last: "",
            places:"",
            hobby:"",
            food:"",
            song:""
        }); //resets input fields after submission
    }

    //props are encalsulated in an object for passing it easily
    const array = {
        a:name.first,b:name.last,g:name.hobby,h:name.places,i:name.song,j:name.food,
        c:vamos,d:InputEvent,e:reset,
        f:Ccolor};
    




        
    return (
        <>
            <div className="box" style={{ "background": (Ccolor === true) ? "#FCBAD3" : "plum" }}>
                <div className="child">Hey {fname} !! </div>
                <h1 id="head" onClick={Change}>{ltime}</h1>
                <div className="child" id="insta">
                    <InstagramIcon id="insta-icon"/>
                </div>
            </div>
            <User array={array} />
        </>
    );
}

export default App;
