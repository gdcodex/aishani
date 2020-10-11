import React from 'react'
import { connect } from 'react-redux'
import {increase,decrease} from '../actions';

const Content =(props) => {
    return (
        <div>
            <h2>The value :{props.value} </h2>
            <button onClick={props.increase}>Increase</button>
            <button onClick={props.decrease}>Decrease</button>
        </div>
    )
};
const mapStateToProps =(state)=>{
    return{
        value: state.first.value
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        increase: ()=>dispatch(increase()),
        decrease: ()=>dispatch(decrease())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Content);

