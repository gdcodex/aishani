
const dcrReducer =(state=true,action)=>{
    switch(action.types){
        case "truth":
            return !state
        default :
        return { ...state}
    }
}
export default dcrReducer