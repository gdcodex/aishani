import React,{useState} from 'react'
import { useHistory } from "react-router-dom";
import {connect} from 'react-redux'
import {signup} from '../redux/actions/authaction'
import '../css/login.css'
import {Redirect } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

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
               <TextField id="filled-secondary" size="small" color="secondary" style={{marginBottom:"10px"}} label="Firstname" variant="outlined" type="text" name="firstname" value={newUser.firstname} onChange={change}  placeholder="Enter your firstname"/>
               <TextField id="filled-secondary" size="small" color="secondary" style={{marginBottom:"10px"}} label="Lastname" variant="outlined" type="text" name="lastname" value={newUser.lastname} onChange={change}  placeholder="Enter your lastname"/>
               <TextField id="filled-secondary" size="small" color="secondary" style={{marginBottom:"10px"}} label="Email" variant="outlined" type="email" name="email" value={newUser.email} onChange={change}  placeholder="Enter your email"/>
               <TextField id="filled-secondary" size="small" color="secondary" style={{marginBottom:"10px"}} label="Password" variant="outlined" type="password" name="password" value={newUser.password} onChange={change} placeholder="Enter your password"/>
               <Tooltip title=" You will be directly logged in">
                 <Button variant="outlined" size="small" color="secondary" type="submit">
              Signup
                 </Button>
                 </Tooltip>
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

