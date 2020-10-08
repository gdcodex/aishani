import React from 'react';
import Nav from './Navbar';
import Brand from './Brandsection';
import './home.css';


const Home =()=>{
    return(
        <>
            <div className="home">
            <Nav/>
            <Brand/>
            <div className="landing">
                <h1 className="aish">AISH<span>ANI</span></h1>
            </div>
            </div>
        </>
    )
};
export default Home;