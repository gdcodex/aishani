import React from 'react';

const Libra = ()=> {

    return(
        <>
            <div className="libra">
                <div className="aside">
                    <ul className="aside-ul">
                        <li className="asideli" id="a-li1">Your likes</li>
                        <li className="asideli" id="a-li2">Artists</li>
                        <li className="asideli" id="a-li3">Album</li>
                        <li className="asideli" id="a-li4">Subscribtion</li>
                    </ul>
                </div>
                <div className="libra-main">
                    <div className="libra-child" id="child1"></div>
                    <div className="libra-child" id="child2"></div>
                    <div className="libra-child" id="child3"></div>
                    <div className="libra-child" id="child4"></div>
                    <div className="libra-child" id="child5"></div>
                    <div className="libra-child" id="child6"></div>
                    <div className="libra-child" id="child7"></div>
                    <div className="libra-child" id="child8"></div>
                </div>
            </div>
        </>
    )
};

export default Libra;