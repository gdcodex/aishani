import React from 'react';
import Top from "./top.js"
import Con from './content.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";





const App = () => {

    const array = {
        a: {
            a: "https://cdn.sweetescape.com/images/blogs/article-images/1867/b40c5169-8572-48ea-8769-1d77fbd42271-big.jpg",
            b: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWcdODzGxq87zc7GSKiTmp7yObRFmwpt2N_g&usqp=CAU"
        },
        b: {
            a: "https://c4.wallpaperflare.com/wallpaper/588/341/83/bellamy-clarke-finn-jasper-wallpaper-preview.jpg",
            b: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTHhyQPU8gQK_M_jfvVJ0UbHW9hJkawjv7PQ&usqp=CAU"
        },
        c: {
            a:"https://c4.wallpaperflare.com/wallpaper/281/875/599/jeffrey-dean-morgan-walking-dead-andrew-lincoln-rick-grimes-wallpaper-preview.jpg",
            b:"https://c4.wallpaperflare.com/wallpaper/281/875/599/jeffrey-dean-morgan-walking-dead-andrew-lincoln-rick-grimes-wallpaper-preview.jpg",
            
        }
    }

    return (
        <Router>
            <Route path="/Moneyheist" component={() => <Top li1="li1" li2="li2" li3="li3"/>} />
            <Route path="/the100" component={() => <Top li1="li2" li2="li1" li3="li3"/>} />
            <Route path="/twd" component={() => <Top li1="li3" li2="li2" li3="li1" />} />

            <Route path="/Moneyheist" component={() => <Con array={array.a} />} />
            <Route path="/the100" component={() => <Con array={array.b} />} />
            <Route path="/twd" component={() => <Con array={array.c} />} />



        </Router>
    )
}

export default App;