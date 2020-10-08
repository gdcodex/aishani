import React from 'react';
import { FirstName } from './App';
import { HighSchool } from './buddyA.js';

//multiple provider

const BuddyC = () => {
    return (
        <>
            <FirstName.Consumer>
                {
                    (first) => {
                        return (
                            <HighSchool.Consumer>
                                {
                                    (school) => {
                                        return (
                                            <>
                                                <h2>
                                                    Hiii {first.a} {first.b}, here is your context API
                                                </h2>
                                                <h3>
                                                I studied in {school} school
                                                </h3>
                                            </>
                                        )
                                    }
                                }
                            </HighSchool.Consumer>
                        )
                    }
                }
            </FirstName.Consumer>
        </>
    )
};
export default BuddyC;





//single provider

// const BuddyC =()=>{
//     return(
//         <>
//         <FirstName.Consumer>
//             {
//                 (first)=>
//                 {
//                     return(
//                         <h2>
//                             Hiii {first.a} {first.b}, here is your context API
//                         </h2>
//                     )
//                 }
//             }
//         </FirstName.Consumer>
//         </>
//     )
// };
// export default BuddyC;