import React from 'react';



function Navigation(){

    const open=()=>{
        if( document.getElementById('ham2').style.display=="none"){
          document.querySelector('header').style.transform="translateX(0%)";
          document.querySelector('header').style.opacity="1";
          document.getElementById('ham2').style.display="block";
          document.getElementById('ham1').style.display="none";
        }
        else if(document.getElementById('ham2').style.display!='none'){
          document.getElementById('ham2').style.display="none";
          document.getElementById('ham1').style.display="block";
          document.querySelector('header').style.transform="translateX(100%)"
        } 
      }


    return(
<nav className="mobile-nav">
    <h1 className="head-first">Enola</h1>
    <div className="ham" onClick={open}>
     <img src="https://cdn4.iconfinder.com/data/icons/business-finance-vol-5-9/512/11-512.png" alt="none" className="hamimg" id="ham1"/>
     <img src="https://www.iconfinder.com/data/icons/basic-ui-elements-color/700/010_x-256.png"   alt="none" className="hamimg" id="ham2"/>
    </div>
    </nav>
    )
}
export default Navigation;