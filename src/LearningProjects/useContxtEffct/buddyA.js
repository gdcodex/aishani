import React,{createContext} from 'react';
import BuddyB from './buddyB';

const HighSchool = createContext();

const BuddyA =() =>{
    return (
        <HighSchool.Provider value={"Holy child"}>
        <BuddyB/>
        </HighSchool.Provider>
    )
};
export default BuddyA;
export {HighSchool};