import React, { useState } from 'react';
import './cal.css';

function Numbers() {

    //setting numbers and operators to iterate through
    const array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9,0, ".", "%"]
    const opeArray = ["+", "-", "*", "/"];

    //state for input and display-input
    const [number, setnumber] = useState("");
    const display = (f) => {
        const neww = (f.target.value);
        // setnumber(number + neww);
        setnumber((p)=>{
            return (p)+neww
        })
    };
    //evaluate function
    const Evaluate =  (e) => {
        try {
            setnumber(
                String(eval(number)).length > 3 &&
                    String(eval(number)).includes(".")
                    ? String(eval(number).toFixed(4))
                    : String(eval(number))
            );
        } catch  {
            console.log(e);
        }
    };
    const [classs, setclasss] = useState(true)
    const change=()=>{
        setclasss(!classs);
    }

       
    


    return (
        <>
            <div className={( classs===true?"calculator-layout":"night-layout" )}>
                
                {/*heading of the app*/}
                <div className="title"><h2>Calculator</h2> <img className="night" style={{display:(classs===true?"none":"inline-block")}} onClick={change} src="https://www.flaticon.com/svg/static/icons/svg/1497/1497625.svg" alt=""/> <img src="/images/day.svg" style={{display:(classs===false?"none":"inline-block")}} onClick={change} alt="" className="day"/></div>


                {/*display of input*/}
                <div id="show" style={{backgroundColor:(classs===false?"#464141":"rgb(81 93 92)"),color:(classs===true?"white":"rgb(245, 132, 2)")}} >{number}</div>



                {/*number template*/}
                <div className="template">
                <div className="num">
                {array.map((e) => <button key={e} className="numbers" value={e} onClick={display}>{" "}{e}</button>)}
                </div>



                {/*operators*/}
                <div className="side-opera">
                {opeArray.map((e) => <button key={e} value={e} onClick={display} >{e}</button>)}
                <button onClick={() => setnumber(number.substr(0, number.length - 1))}>  Clear </button>
                <button onClick={() => setnumber("")} value="">AC</button>
                <button onClick={Evaluate} value="=">=</button>
                </div>
                </div>
            </div>
        </>
    );

};


export default Numbers;

