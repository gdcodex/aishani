import React from 'react'
import Nav from './nav'
import Diary from './diary'
import Newevent from './newevent'
import Edetails from './eventdetails'
import Sup from './signup'
import Lin from './login'
import {connect} from 'react-redux'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


function App(props) {
    return (
        <div>
            <Router>
            <Nav />
            <Switch>
            { props.authstatus.uid?
            <>
            <Route path="/" exact component={() => <Diary/>} />
            <Route path="/newevent" exact component={() => <Newevent/>} />
            <Route path="/eventdetails" exact component={() => <Edetails/>} />
            </>
            :
            <>
            <Route path="/signup" exact component={() => <Sup/>} />
            <Route path="/login" exact component={() => <Lin/>} />
            </>
            }  
            </Switch>
            </Router>

        </div>
    )
}
const mapStateToProps = (state)=>{
   
    return{
        authstatus :state.firebase.auth
    }
}

export default connect(mapStateToProps)(App)
