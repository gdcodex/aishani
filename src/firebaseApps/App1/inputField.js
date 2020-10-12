import React ,{useEffect, useState}from 'react'
import {connect} from 'react-redux'
import {renderBuddy} from '../../redux/actions'

const Input = (props) =>{
    const [user, setuser] = useState({
        name:'',
        band:'',
        // details:""
    });
    const inputU=(e)=>{
        const {value, name} = e.target;
        setuser((p)=>{
            return {
                ...p,[name]:value
            }
        })
    }

    // useEffect(()=>{
    //     props.renderBuddy(user)
    // },[user.details])
   
    return(
        <>
            <label htmlFor="name">Name: </label>
            <input type="text" name='name' className="userInput1" value={user.name} onChange={inputU}/>
            <div>
            <label htmlFor="band">Band: </label>
            <input type="text" name='band' className="userInput2" value={user.band} onChange={inputU}/>
            </div>
            <button style={{display:"block"}} onClick={()=>{
                // setuser((p)=>{
                //    return{...p, details: `Name:${p.name +' ' + 'Band:' + p.band}`}
                // })
                 props.renderBuddy(user)
            }}>Save</button>
            {
                user.details && [
                    <>
                    <p>Name:{user.name}</p>
                    <p>Band:{user.band}</p>
                    </>,<h1>Successful gerem bud</h1>
                    ]
            }
        </>
    )
}

const mapDispatchToProps=(dispatch)=>{
    return {
        renderBuddy: (user)=>dispatch(renderBuddy(user))
    }
}
export default connect(null,mapDispatchToProps)(Input);