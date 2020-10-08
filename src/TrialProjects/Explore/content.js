import React,{useContext} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FirstName } from '../Homepage/App';
import Magnify from './search';

const Content =()=>{

    const change= useContext(FirstName);
    return(
        <>
            <div className={change.b}>
                <div className="mood" id="md1">{Pop}</div>
                <div className="mood" id="md2">{Party}</div>
                <div className="mood" id="md3">{Workout}</div>
                <div className="mood" id="md4">{Chill}</div>
                <div className="mood" id="md5">{R&B Soul}</div>
                <div className="mood" id="md6">{Hip-hop}</div>
                <div className="mood" id="md7">{Romance}</div>
                <div className="mood" id="md8">{Oldies}</div>
                <div className="mood" id="md9">{Devotional}</div>
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