import React from "react";
import Button from "../elements/button";
import {store} from '../store/store'
import Controlparams from "../elements/controlparams";
import "./control.css";
function Controls() {
  return (
    <section
      className="header-container"
      style={{
        backgroundColor: "rgb(238,238,238)",
        flexFlow: "wrap",
        height: "auto",
        padding: "5px 0",
        overflow: "visible",
      }}
    >
      <div className="control-first">
        {store.map((e, i) => (
          <Controlparams
            key={i}
            name={e.name || false}
            values={e.values || false}
            list={e.list || false}
            command={e.command || false}
            color={e.color || false}
            img={e.img || false}
            none={e.none || false}
            x={e.x || false}
            highlight={e.highlight || false}
            unlist={e.unlist || false}
          />
        ))}
      </div>
      <div className="control-second">
        <Button text="SAVE" color="black" />
        <Button text="SEND FOR PROOF" color="rgb(81,195,216)" img />
        <Button
          text="PUBLISH"
          background="linear-gradient(to right, rgb(81,195,216) 0%, rgb(59,143,185) 100%)"
        />
      </div>
    </section>
  );
}

export default Controls;
