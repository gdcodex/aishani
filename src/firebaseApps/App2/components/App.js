import React from 'react'
import Nav from './nav'
import Diary from './diary'
import Newevent from './newevent'
import Edetails from './eventdetails'
import Sup from './signup'
import Lin from './login'


import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


function App() {
    return (
        <div>
            <Router>
            <Nav />
            <Switch>
            <Route path="/signup" exact component={() => <Sup/>} />
            <Route path="/login" exact component={() => <Lin/>} />
            <Route path="/" exact component={() => <Diary/>} />
            <Route path="/newevent" exact component={() => <Newevent/>} />
            <Route path="/eventdetails" exact component={() => <Edetails/>} />
            </Switch>
            </Router>

        </div>
    )
}

export default App
