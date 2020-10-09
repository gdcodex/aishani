export const change=()=>{
    return{
        type:'IN_OUT'
    }
};


export const reset = () => {
    return {
        type:'RESET'
    }
}
//while using thunk we can return a function

export const createSomething =(project)=>{
    return (dispatch,getState)=>{
        //make async call
        dispatch({type:'CREATE', project})
    }
};