import React from 'react';
import "./shows.css";
import whiteman from "../images/whiteman.svg";



const Con = ({array})=> {
    const change =() =>{
       let image1=document.getElementById("img1");
       let image2=document.getElementById("img2");
       image1.style.transform="translate(-20px,-20px)";
       image2.style.transform="translate(20px,20px)";
    }
    const changeBack =() =>{
       let image1=document.getElementById("img1");
       let image2=document.getElementById("img2");
       image1.style.transform="translate(0px,0px)";
       image2.style.transform="translate(0px,0px)";
    }

    return(

        <>
            <div className="content-box">
            <div className="box" onMouseOver={change} onMouseLeave={changeBack}>
                <div className="child" id="child1"> <img src={array.a} id="img1" alt=""/> </div>
                <div className="child" id="child2"> <img src={array.b} id="img2" alt=""/> </div>
                <div className="child" id="child3"> <img src={array.c} id="img3" alt=""/> </div>
                {/* <div className="child" id="child4"> <img src={props} alt=""/> </div>
                <div className="child" id="child5"> <img src={props} alt=""/> </div>
                <div className="child" id="child6"> <img src={props} alt=""/> </div>
                <div className="child" id="child7"> <img src={props} alt=""/> </div> */}
                </div>
                <h3 className="login">Sign Up <img src={whiteman} alt=""/></h3>
            </div>
        </>
    )
};

export default Con;
