import React from 'react';




const Top = ({li1,li2,li3})  =>{
    
    
    
    return(
        <>
           <nav className="navigation">
               <ul className="nav-ul">
                   <li className="nav-li"  id={li1}> <a href="/Moneyheist">Monet Heist</a></li>
                   <li className="nav-li" id={li2}><a href="/the100">The 100</a></li>
                   <li className="nav-li" id={li3}><a href="/twd">TWD</a></li>
               </ul>
           </nav> 
        </>
    )
}

export default Top;