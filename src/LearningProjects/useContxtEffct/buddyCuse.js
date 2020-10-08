import React, {useContext} from 'react';
import {FirstName} from './App';
import {HighSchool} from './buddyA';


const BuddyCuse = () =>{
    const first = useContext(FirstName);
    const school = useContext(HighSchool);
    return(
        <>
            <h1>Welcome back {first.a} buddy</h1>
            <h3>Let's do it again dear {school} dude !</h3>
        </>
    )
};

export default BuddyCuse;
