import * as actions from './actiontypes';


export const increase = (py) =>{
    return {
        type: actions.INCR_SE,
        payload:py
    }
};
export const decrease = (py) =>{
    return {
        type: actions.DCR_SE,
        payload:py
    }
};