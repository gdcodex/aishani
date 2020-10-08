import React from 'react';
import find from './find.svg';

const Magnify = () => {
    return(
        <>
            <div className="my-song">
                <input type="text" className="find-song"/>
                <img src={find} alt="" id='find'/>
            </div>
        </>
    )
};

export default Magnify;