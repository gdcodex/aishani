import { Button } from '@material-ui/core';
import React, {useState} from 'react';
import './todo.css';


const App=()=>{

    const [todo, settodo] = useState([]);
    const [list, setlist] = useState([]);
    
    const add = () =>{
        setlist((prev)=>{
            return [...prev,...todo]
        });
        settodo([]);
    };
    const deletee = (e)=>{
        var neww= e.target.value;
        console.log(neww);
        setlist(()=>{
            return list.filter(item=>item!==neww);
        })
    };
    const arraytodo = [];
    if(list!==[]){
    list.forEach((item,i)=>arraytodo.push(
         <><div><div key={item,"h"} className="my-todo-item" style={{display:"inline-block"}}>{item}</div><button onClick={deletee} key={item} value={item}>{"x"}</button></div></>))
    }

  

    return(
    <>
        <div className="todo-layout">
            <div className="add-todos">
                <input type="text" name="todo" value={todo}  onChange={(e)=>{
                    console.log(e.target.value);
                    settodo([e.target.value])
                }}/>
                <Button style={{background:"#343634",color:"seashell"}} onClick={add}>Add</Button>
                <div className="todo-list">{arraytodo}</div>
            </div>
        </div>
    </>
    )
};
export default App;