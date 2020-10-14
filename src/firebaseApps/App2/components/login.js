import React,{useState} from 'react'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'
import signIn from '../redux/actions/authaction'
import '../css/login.css'

function Lin(props) {

    const [user, setuser] = useState({
        email:"",
        password:""
    })

    const change=(e)=>{
        const {value,name}=e.target
        setuser((prev)=>{
                return {
                    ...prev,[name]:value
                }
            }
        )
    }
    
    
    return (
        <div className="log-in">
            <form onSubmit={(e)=>{
                e.preventDefault()
                props.signIn(user)
            }} className="in">
               <input type="email" name="email" value={user.email} onChange={change}  placeholder="Enter your email"/>
               <input type="password" name="password" value={user.password} onChange={change} placeholder="Enter your password"/>
               <button type="submit">Login</button>
            </form>
               {props.authError && <p>{props.authError}</p>}
        </div>
    )
}

const mapStateToProps = (state)=>{
    console.log(state.auth.authError)
    return{
        authError: state.auth.authError
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        signIn:(creds)=>dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Lin)
