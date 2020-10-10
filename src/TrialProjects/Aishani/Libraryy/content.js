import React from 'react';
import Libbody from './libbody';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';



const Content = ()=>{


    return (
        <>
            <div className="libra-content">
            <div className="lib-head">
                <NavLink to='/library/likes'  activeClassName="lbh" /*className="lbhead" id="lbh1"*/>Likes</NavLink>
                <NavLink to='/library/subscriptions'  activeClassName="lbh" /*className="lbhead"*/ id="lbh2">Subscription</NavLink>
                <NavLink to='/library/playlist'  activeClassName="lbh" /*className="lbhead" id="lbh3"*/>Playlist</NavLink>
                <NavLink to='/library/albums'  activeClassName="lbh" /*className="lbhead" id="lbh4"*/>Albums</NavLink>
                
                </div>
                <Router>
                <Libbody/>
                </Router>
            </div>
        </>
    )
};
export default Content;