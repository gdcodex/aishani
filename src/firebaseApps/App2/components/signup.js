import React,{useState} from 'react'
import { useHistory } from "react-router-dom";
import {connect} from 'react-redux'
import {signup} from '../redux/actions/authaction'
import '../css/login.css'
import {Redirect } from 'react-router-dom'

function Sup(props) {

    
    const [newUser, setnewUser] = useState({
        email:"",
        password:"",
        firstname:"",
        lastname:""
    })

    const change=(e)=>{
        const {value,name}=e.target
        setnewUser((prev)=>{
                return {
                    ...prev,[name]:value
                }
            }
        )
    }
    
   
    let history = useHistory();
    if(props.authstatus.uid) return <Redirect to='/'/>
    return (
        <div className="log-in">
            <form onSubmit={(e)=>{
                e.preventDefault()
                props.signup(newUser)
                history.push("/");
            }} className="in">
               <input type="text" name="firstname" value={newUser.firstname} onChange={change}  placeholder="Enter your firstname"/>
               <input type="text" name="lastname" value={newUser.lastname} onChange={change}  placeholder="Enter your lastname"/>
               <input type="email" name="email" value={newUser.email} onChange={change}  placeholder="Enter your email"/>
               <input type="password" name="password" value={newUser.password} onChange={change} placeholder="Enter your password"/>
               <button type="submit">Signup</button>
            </form>
               {props.authError && <p>{props.authError}</p>}
        </div>   
    )
}

const mapStateToProps = (state)=>{
    console.log("Sign-up error->",state.auth.authError)
    return{
        authError: state.auth.authError,
        authstatus :state.firebase.auth
       
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        signup:(creds)=>dispatch(signup(creds))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Sup)

