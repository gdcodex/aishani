import React,{useContext} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FirstName } from '../Homepage/App';
import Magnify from './search';

const Content =()=>{

    const change= useContext(FirstName);
    return(
        <>
            <div className={change.b}>
                <div className="mood" id="md1">{change.types.a}</div>
                <div className="mood" id="md2">{change.types.b}</div>
                <div className="mood" id="md3">{change.types.c}</div>
                <div className="mood" id="md4">{change.types.d}</div>
                <div className="mood" id="md5">{change.types.e}</div>
                <div className="mood" id="md6">{change.types.f}</div>
                <div className="mood" id="md7">{change.types.g}</div>
                <div className="mood" id="md8">{change.types.h}</div>
                <div className="mood" id="md9">{change.types.i}</div>
            </div>
            <Router>
            <Route path="/explore" exact>
            <Magnify/>
            </Route>
            </Router>
        </>
    )
};
export default Content;