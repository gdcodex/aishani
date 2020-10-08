import React from 'react';
import './gdai.css';
import Play from './play';

const Nav = () => {
    return (
        <>
            <ul id="nav-ul">
                <li className="nav-li" id="nav-li1">Illenium</li>
                <li className="nav-li" id="nav-li2">Cold play</li>
                <li className="nav-li" id="nav-li3">Chainsmoker</li>
                <li className="nav-li" id="nav-li4">Eminen</li>
            </ul>
            <div id="plays">
            <Play className={"bt"}/>
            <Play className="bt"/>
            <Play className="bt"/>
            <Play className="bt"/>
            </div>

        </>
    )
}
export default Nav;