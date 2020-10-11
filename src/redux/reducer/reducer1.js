const { INCR_SE } = require("../actions/actiontypes")
const {DCR_SE } = require("../actions/actiontypes")

export const initState = {
    value: 69,
    name: "gerem",
    year:"twenty-twenty"
}

const  incrReducer =(state=initState,action)=>{
    switch(action.type){
        case INCR_SE:
            return {...state, value: state.value+1}   
            case DCR_SE:
                return {...state,value: state.value-1}    
        default:
            return state    
    }
}
export default incrReducer;