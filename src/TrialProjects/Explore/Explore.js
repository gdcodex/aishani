import React, {useState,useContext} from 'react';
import Nav from '../Homepage/Navbar';
import Content from './content';
import './explore.css';

const  Explore = () => {

   
    

    return(
        <>
            <div className="explore">
                <Nav/>
                <Content/>
            </div>
        </>
    )
};
export default Explore;