import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <div>
            <h2 className="title">Diary</h2>
            <ul className="nav-ul">
                <li className="nav-li" id="nali1">
               <NavLink to='/newevent' activeClassName="diary-link"  style={{ 'textDecoration': 'none' }}>New Event</NavLink>
                 </li>

                <li className="nav-li" id="nali2">
                <NavLink to='/login' activeClassName="diary-link"  style={{ 'textDecoration': 'none' }}>Login</NavLink>
                </li>

                <li className="nav-li" id="nali3">
                <NavLink to='/login' activeClassName="diary-link"  style={{ 'textDecoration': 'none' }}>Logout</NavLink>
                </li>

                <li className="nav-li" id="nali4">
                <NavLink to='/accounts' activeClassName="diary-link"  style={{ 'textDecoration': 'none' }}>
                <img src="#" alt="ac" className="user-ac-icon"/>
                </NavLink>
               </li>
            </ul>
        </div>
    )
}

export default Nav
