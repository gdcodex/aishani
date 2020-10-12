import React ,{useEffect, useState}from 'react';

const Input = () =>{
    const [user, setuser] = useState({
        name:'',
        band:'',
        details:""
    });
    const inputU=(e)=>{
        const {value, name} = e.target;
        setuser((p)=>{
            return {
                ...p,[name]:value
            }
        })
    }
    return(
        <>
            <input type="text" name='name' className="userInput1" value={user.name} onChange={inputU}/>
            <input type="text" name='band' className="userInput2" value={user.band} onChange={inputU}/>
            <button onClick={()=>{
                setuser((p)=>{
                   return{...p, details: `Name:${p.name +' ' + 'Band:' + p.band}`}
                })
            }}>Save</button>
            {
                user.details && [
                    <>
                    <p>Name:{user.name}</p>
                    <p>Band:{user.band}</p>
                    </>
                    ]
            }
        </>
    )
}
export default Input;