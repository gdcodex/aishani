import React, { useState, useRef, useContext, useEffect } from "react";
import context from "../store/context";
import Controlvalues from "./controlvalues";

function Controlparams(props) {
  const colorinput = useRef();
  const setglobal = useContext(context).setopen;
  const [text, settext] = useState("");
  const [open, setopen] = useState(false);
  const [value, setvalue] = useState("#000000");
  const format = (command, value) => {
    document.execCommand(command, false, value);
    console.log("Hello");
  };
  useEffect(() => {
    setglobal(open);
  }, [open]);
  return (
    <section className="control-box">
      <a
        href="/"
        className="control-params"
        style={{ width: props.img || props.name === "3" ? "auto" : "100px" }}
        onClick={(e) => {
          e.preventDefault();
          if (props.unlist) {
            return format("insertunorderedlist");
          }
          if (props.highlight) {
            return format(props.command, "#51C3D8");
          }
          if (props.color) {
            colorinput.current.click();
          }
          setopen((p) => {
            return !p;
          });
        }}
      >
        {!props.img && <span>{text ? text : props.name}</span>}
        {props.list && <img src={text ? text : props.img} alt="img" />}
        {props.img && !props.list && <img src={props.img} alt="img" />}
        {!props.none && (
          <img
            src="./dropdown.svg"
            alt="controls"
            id="img-drop"
            className={!open ? "open-img" : "close-img"}
          />
        )}
      </a>
      {props.color && (
        <input
          type="color"
          style={{ display: "none" }}
          ref={colorinput}
          id="color"
          name="color"
          value={value}
          onChange={(e) => {
            setvalue(e.target.value);
            format("foreColor", e.target.value);
          }}
        />
      )}
      {open && !props.color && !props.x && (
        <Controlvalues
          color={props.color}
          list={props.list}
          values={props.values}
          set={{ command: props.command, settext, setopen }}
        />
      )}
    </section>
  );
}

export default Controlparams;
