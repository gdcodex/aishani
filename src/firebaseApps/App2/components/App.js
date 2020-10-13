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
            <Route path="/signup" component={() => <Sup/>} />
            <Route path="/login" component={() => <Lin/>} />
            <Route path="/diary" component={() => <Diary/>} />
            <Route path="/newevent" component={() => <Newevent/>} />
            <Route path="/eventdetails" component={() => <Edetails/>} />
            </Router>

        </div>
    )
}

export default App
