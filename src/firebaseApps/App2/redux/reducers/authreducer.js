const initstate={
    authError:null
}

const authReducer =(state=initstate,action)=>{
    switch(action.type){
        case "USER_ERROR":
            console.log(" login failed")
            return {
                ...state,
                authError:"Login Failed"
            }
        case "LOG_IN_SUCCESS":
            console.log("login success")
            return{
                ...state,
                authError: null
            }
        case "SIGN_OUT":
            console.log("Signned out")    
            return state
        default: 
        return state
    }
}

export default authReducer