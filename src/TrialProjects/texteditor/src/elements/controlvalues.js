import React from 'react'
import './list.css'
function Controlvalues(props) {
    const format =(command,value)=>{
        document.execCommand(command, false, value);
        console.log("Hello");
    };
    return (
        <div className={props.list?"list":"values"}>
                {props.values && props.values.map((ele,i)=><a href={"/"} className="list-values" onClick={
                    (e)=> {e.preventDefault();
                    props.set.command?
                    format(props.set.command,ele):
                    format(ele);
                    props.set.settext(ele)}} key={i}>{ele}</a>)}
                    {
                        props.list && props.list.map((ele,i)=><img key={i} src={ele.src}
                        onClick={
                            (e)=> {e.preventDefault();
                    format(ele.val);
                    props.set.settext(ele.src)}
                        }
                         alt='img'/>)
                    }
        </div>
    )
}

export default Controlvalues
