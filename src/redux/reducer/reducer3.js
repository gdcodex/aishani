import * as actions from '../actions/fusers';

const initUser= {
    loading:false,
    user:[],
    error:''
}

    const reducer3=(state=initUser,action)=>{
    switch(action.type){
        case actions.FETCH_REQUEST:
            return {
                ...state,loading:true
            }
        case actions.FETCH_SUCCESS:
            return {
                loading:false,
                user: action.payload,
                error:''
            }
        case actions.FETCH_FAILURE:
            return {
                loading:false,
                user:[],
                error:action.payload
            }
            default:
                return state
    }
}
export  default reducer3;