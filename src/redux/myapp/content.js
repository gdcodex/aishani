import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import {increase,decrease,fetchusers} from '../actions';

const Content =(props) => {
    const array = props.data.user.map((e,i)=><h3 key={e+i}>{e.name}</h3>)
    useEffect(()=>{
    console.log('userData:',props.data.user.map(e=>e.name))
    },[props.data])
    return (
        <div>
            <h2>The value :{props.value} </h2>
            <button onClick={props.increase}>Increase</button>
            <button onClick={props.decrease}>Decrease</button>
            <button onClick={props.fetchUsers}>fetch</button>
            <div>
                <h1>Our People</h1>
                {props.data.error? <h2>Not found</h2>:array}
            </div>
            
        </div>
    )
};
const mapStateToProps =(state)=>{
    return{
        value: state.first.value,
        data: state.third
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        increase: ()=>dispatch(increase()),
        decrease: ()=>dispatch(decrease()),
        fetchUsers:()=>dispatch(fetchusers())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Content);

