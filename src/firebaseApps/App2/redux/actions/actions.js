import * as actiontypes from './actiontypes'

export const  createevent =(event)=>{
    return (dispatch,getstate,{getFirebase,getFirestore})=>{
        const firestore=getFirestore()
        firestore.collection('Diary').add(
            {
                ...event,
                createdAt:  new Date()
            }
        ).then(()=>{
            dispatch({type:actiontypes.CREATE_EVENT,event})
        }).catch(err=>{
            dispatch({type:actiontypes.CREATE_EVENT_FAILURE,err})
        })
    }
}