import React,{useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import Tooltip from '@material-ui/core/Tooltip';
import '../css/navigation.css'
import {connect} from 'react-redux'
import {signout} from '../redux/actions/authaction'

function Nav(props) {
    const open = () => {
        document.getElementById("ull").classList.toggle('open')
       
        const arrayin= [0,1,3,4]
        const arrayout=[2,5,6]
        if(props.authstatus.uid)
        arrayin.map((e)=>{
             document.getElementById(`nali${e}`).classList.toggle('lii')
            })
        else arrayout.map((e)=>{
            document.getElementById(`nali${e}`).classList.toggle('lii')
           })
     
        }
        const li =[0,1,3,4]
    const [navbar, setnavbar] = useState(false);
    const navbackground =()=>{
       if( window.scrollY>=80) {
           setnavbar(true)
           li.map((e)=>{document.getElementById(`nali${e}`).classList.toggle("colored-li")}
           )
        }
       else setnavbar(false)
    }
    // window.addEventListener("scroll",navbackground);

    return (
        <div className={navbar?"colored-nav":"navigation-bar"}>
            {/*left */}
            <div className="navigation-left">
                <div className="feather">
                    <img src="/images/feather.svg" alt="logo" />
                    <h2 className="title" style={{color:(navbar?"rgb(241,231,231)":"rgb(48, 44, 44)")}}>Diary</h2>
                </div>
            </div>
            {/*right*/}
            <div className="m-nav"><img src="/images/mobileham.svg" alt="menu" onClick={open} /></div>
            <ul className="nav-ul" id="ull">
            { props.authstatus.uid?
            <>
                <li className={navbar?"colored-li":"nav-li"} id="nali0">
                    <NavLink to='/' exact activeClassName="diary-link" onClick={open} style={{ 'textDecoration': 'none' }}>My diary</NavLink>
                </li>
                <li className={navbar?"colored-li":"nav-li"}  id="nali1">
                    <NavLink to='/newevent' activeClassName="diary-link" onClick={open} style={{ 'textDecoration': 'none' }}>New Event</NavLink>
                </li>
                <li className={navbar?"colored-li":"nav-li"}  id="nali3">
                    <NavLink to='/login' activeClassName="diary-link" onClick={open,props.signOut} style={{ 'textDecoration': 'none' }}>Logout</NavLink>
                </li>
                <li className={navbar?"colored-li":"nav-li"}  id="nali4">
                <Tooltip title="Account settings">
                    <NavLink to='/accounts' activeClassName="diary-link" onClick={open} style={{ 'textDecoration': 'none' }}>
                        {/* <img src="#" alt="ac" className="user-ac-icon" /> */}{props.initials.initials}
                    </NavLink>
                    </Tooltip>
                </li>
                </>
                :
                <>
                <li className={navbar?"colored-li":"nav-li"}  id="nali2">
                    <NavLink to='/login' activeClassName="diary-link"  onClick={open}  style={{ 'textDecoration': 'none' }}>Login</NavLink>
                </li>
                <li className="nav-li" id="nali5">
                    <NavLink to='/signup' activeClassName="diary-link"  onClick={open}  style={{ 'textDecoration': 'none' }}>Signup</NavLink>
                </li>
                <li className="nav-li" id="nali6">
                    <NavLink to='/help' activeClassName="diary-link"  onClick={open}  style={{ 'textDecoration': 'none' }}>Help</NavLink>
                </li>
                </>
            }
            


               
            </ul>
        </div>
    )
}
const mapStateToProps = (state)=>{
   
    return{
        authstatus :state.firebase.auth,
        initials:state.firebase.profile
    }
}
const mapDispatchToProps =(dispatch)=>{
    return{
        signOut: ()=>dispatch(signout())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Nav)
