import React from 'react';
import Uno from './uno.js';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './zzz.css';
import './yyy.css';
import './libra.css';


const App = () => {

    const array ={
        a:{a:"first-half",
           b:"top", c:"li1", d:"li2"},
        b:{a:"g-name",
           b:"bop",c:"li2", d:"li1"}
        
    }

    return(
        <Router>
        <Switch>
            <Route path="/" exact render={()=><Uno classs={array.a}/>}/>
            <Route path="/:n" exact render={()=><Uno classs={array.b}/>}/>
            </Switch>
        </Router>
    )
};
export default App;