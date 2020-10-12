const { actionTypes } = require("react-redux-firebase");

const userReducer = (state=[],action) =>{
    switch(action.type){
        case 'CREATE_USER':
            console.log("User created")
            return state
        case "CREATE_USER_ERR":
            console.log("There is an error")
            return state
        default:
            return state        
    }
}
export default userReducer;