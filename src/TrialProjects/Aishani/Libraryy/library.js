import React from 'react';
import Content from './content';
import Recent from './recent';
import Nav from '../Homepage/Navbar';
import './libra.css';
import './libramedia.css';


const Libra =()=>{
    return(
        <>
            <div className="libra">
                <Nav/>
                <Content/>
                <Recent/>
            </div>
        </>
    )
};
export default Libra;
