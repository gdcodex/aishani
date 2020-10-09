import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
//import {connect} from 'react-redux';
import {change} from '../../actions';





const App = ()=>{
    const posts = useSelector(state=>state.reducer1.posts[0]);
    const reducer2 = useSelector(state=>state.reducer2);

    const dispatch =useDispatch();



    return(
        <>
         <div><h1>Hey buddy gerem {posts} !</h1></div>
         {<h2> It's {`${reducer2}`} gd </h2>}
         <button onClick={()=>dispatch(change())}>Change</button>
        </> 
         )
};


//using connect --> old method 
/*const mapStateToProps=(state)=>{
    return{
        posts:state.reducer1.posts[0]
    }
};*/
//export default connect(mapStateToProps)(App);


export default App;