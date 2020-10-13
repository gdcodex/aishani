import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/navigation.css'

function Nav() {
    const open = () => {
        document.getElementById("ull").classList.toggle('open')
       
        const array= [0,1,3,4]
        array.map((e)=>{
             document.getElementById(`nali${e}`).classList.toggle('lii')
            })
     
        }


    return (
        <div className="navigation-bar">
            {/*left */}
            <div className="navigation-left">
                <div className="feather">
                    <img src="/images/feather.svg" alt="logo" />
                    <h2 className="title">Diary</h2>
                </div>
            </div>
            {/*right*/}
            <div className="m-nav"><img src="/images/mobileham.svg" alt="menu" onClick={open} /></div>
            <ul className="nav-ul" id="ull">
                <li className="nav-li" id="nali0">
                    <NavLink to='/' exact activeClassName="diary-link" style={{ 'textDecoration': 'none' }}>My diary</NavLink>
                </li>
                <li className="nav-li" id="nali1">
                    <NavLink to='/newevent' activeClassName="diary-link" style={{ 'textDecoration': 'none' }}>New Event</NavLink>
                </li>
                {/* 
                <li className="nav-li" id="nali2">
                    <NavLink to='/login' activeClassName="diary-link" style={{ 'textDecoration': 'none' }}>Login</NavLink>
                </li> */}

                <li className="nav-li" id="nali3">
                    <NavLink to='/login' activeClassName="diary-link" style={{ 'textDecoration': 'none' }}>Logout</NavLink>
                </li>

                <li className="nav-li" id="nali4">
                    <NavLink to='/accounts' activeClassName="diary-link" style={{ 'textDecoration': 'none' }}>
                        {/* <img src="#" alt="ac" className="user-ac-icon" /> */}A
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Nav
