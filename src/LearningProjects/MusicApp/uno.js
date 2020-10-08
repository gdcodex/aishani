import React from 'react';
import Duo from './duo';
import Sec from './trio';
import Libra from './library';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';


const Uno = ({classs})=>{

    return (
        <Router>
      
            <div className={classs.a}>
                <nav className={classs.b}>
                    <ul className="nav-ul">
                        {/* <li className="navli" id={classs.c}><a href="/">Home</a></li>
                        <li className="navli" id={classs.d}> <a href="/library">Library</a> </li> */}
                        <li className="navli" id={classs.c}><Link to="/">Home</Link></li>
                        <li className="navli" id={classs.d}> <Link to="/library">Library</Link> </li>
                        <li className="navli" id="li3">Settings</li>
                    </ul>
                </nav>
                <Route path="/" exact component={Sec}/>     
            </div>
            <Route path="/library" exact component={()=><Libra/>}/>
            <Route path="/" exact component={Duo}/>
            
       
        </Router>
    )
};

export default Uno;