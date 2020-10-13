import * as actiontypes from '../actions/actiontypes'

const eventReducer = (state=[],action)=>{
    switch (action.type){
        case actiontypes.CREATE_EVENT:
            console.log("New event added")
            return state
        case actiontypes.CREATE_EVENT_FAILURE:
            console.log("Failed to add")
            return state
        default:
            return state
    }
}
export default eventReducer;