import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux'
import signIn from '../redux/actions/authaction'
import '../css/login.css'
import { Redirect } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


function Lin(props) {





    const [user, setuser] = useState({
        email: "",
        password: ""
    })

    const change = (e) => {
        const { value, name } = e.target
        setuser((prev) => {
            return {
                ...prev, [name]: value
            }
        }
        )
    }

    let history = useHistory();
    console.log("xxx", props.authstatus)
    if (props.authstatus.uid) return <Redirect to='/' />
    return (
        <div className="log-in">
        
            <form onSubmit={(e) => {
                e.preventDefault()
                props.signIn(user)
                history.push("/");
            }} className="in">
                <TextField id="filled-secondary" size="small" color="secondary" style={{marginBottom:"20px"}} label="Email" variant="outlined" type="email" name="email" value={user.email} onChange={change} placeholder="Enter your email" />
                <TextField id="filled-secondary" size="small"  color="secondary" style={{marginBottom:"10px",color:"red"}} label="Password" variant="outlined" type="password" name="password" value={user.password} onChange={change} placeholder="Enter your password" />
                <Button variant="outlined" size="small" color="secondary" type="submit">
                    Login
                 </Button>
            </form>
         
            {props.authError && <p>{props.authError}</p>}
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        authError: state.auth.authError,
        authstatus: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lin)
