import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Explore from "../Explore/Explore";
import Libra from "../Libraryy/library.js";
import Sture from "../signup/signature.js";

const FirstName = createContext();
const App = () => {
  // const Change={a:'nav-ul',b:'navul',c:'navu',d:'na',
  //                 e:'genre',f:'enre'}
  const Change = {
    a: { a: "nav-ul" },
    b: {
      a: "navul",
      b: "genre",
      types: [
        "Pop",
        "Party",
        "Workout",
        "Chill",
        "R&B Soul",
        "Hip-hop",
        "Romance",
        "Oldies",
        "Devotional",
      ],
    },

    c: { a: "navu", b: "enre", types: {} },
    d: { a: "na" },
  };

  return (
    <Router>
      <FirstName.Provider value={Change.a}>
        {" "}
        <Route path="/aish" exact component={Home} />{" "}
      </FirstName.Provider>
      <FirstName.Provider value={Change.b}>
        {" "}
        <Route path="/explore" exact component={Explore} />{" "}
      </FirstName.Provider>
      <FirstName.Provider value={Change.c}>
        {" "}
        <Route path="/library" exact component={Libra} />{" "}
      </FirstName.Provider>
      <FirstName.Provider value={Change.c}>
        {" "}
        <Route path="/library/:id" exact component={Libra} />{" "}
      </FirstName.Provider>
      <FirstName.Provider value={Change.d}>
        {" "}
        <Route path="/signup" exact component={Sture} />{" "}
      </FirstName.Provider>
    </Router>
  );
};

export default App;
export { FirstName };

// const [state, setstate] = useState("taylor swift");

// const getSong = async()=>{
//  const data = await   axios({
//                             "method":"GET",
//                             "url":"https://searchly.p.rapidapi.com/song/search",
//                             "headers":{
//                             "content-type":"application/octet-stream",
//                             "x-rapidapi-host":"searchly.p.rapidapi.com",
//                             "x-rapidapi-key":"09c0c2142emsh40c573f0cda331ap1e6391jsn0e1c2774ab22",
//                             "useQueryString":true
//                             },"params":{
//                             "query":`${state}`
//                             }
//                             });

//                             const res =JSON.parse(data.request.response);

//                             console.log(res.response.results);

//                         };
// getSong();
