import React, { useContext ,useEffect} from 'react';
import { FirstName } from './App';
import { NavLink } from 'react-router-dom'
import './nav.css';
import './media.css';


const Nav = () => {


    const change = useContext(FirstName);

  




    return (
        <>
            <div className="navigation">
                <ul className={change.a} id="ull">
                    <li className="na-li" id="li1">
                        <NavLink to='/aish' activeClassName="ish"  style={{ 'textDecoration': 'none' }}>Aish</NavLink>
                    </li>
                    <li className="na-li" id="li2">
                        <NavLink to='/explore' activeClassName="ish"   style={{ 'textDecoration': 'none' }}>Explore</NavLink>
                    </li>
                    <li className="na-li" id="li3"><NavLink to='/library' activeClassName="ish"   style={{ 'textDecoration': 'none' }}>Library</NavLink> </li>
                    <li className="na-li" id="li4"><NavLink to='/signup' activeClassName="ish"   style={{ 'textDecoration': 'none' }}>Sign up</NavLink> </li>
                </ul>
            </div>
        </>
    )
};
export default Nav;
