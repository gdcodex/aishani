import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FirstName } from "../Homepage/App";
import Magnify from "./search";

const Content = () => {
  const change = useContext(FirstName);
  return (
    <>
      <div className={change.b}>
        {change.types.map((p, i) => (
          <div className="mood" key={p} id={`md${i + 1}`}>
            {p}
          </div>
        ))}
      </div>
      <Router>
        <Route path="/explore" exact>
          <Magnify />
        </Route>
      </Router>
    </>
  );
};
export default Content;
