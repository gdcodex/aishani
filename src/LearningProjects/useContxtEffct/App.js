import React, { createContext } from 'react';
// import BuddyA from './buddyA';
import Effect from "./useEffect";

const FirstName = createContext();
const array = { a: "Gerem", b: "Daim" }



const App = () => {
    return (<FirstName.Provider value={array}>
        <Effect />
    </FirstName.Provider>
    )
};

export default App;
export { FirstName };
