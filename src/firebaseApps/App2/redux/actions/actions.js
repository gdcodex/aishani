import * as actiontypes from './actiontypes'

export const  createevent =(event)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        const firestore=getFirestore()
        firestore.collection('Diary').add(
            {
                ...event,
                firstname: profile.firstname,
                lastname:profile.lastname,
                authorId: authorId,
                createdAt:  new Date()
            }
        ).then(()=>{
            dispatch({type:actiontypes.CREATE_EVENT,event})
        }).catch(err=>{
            dispatch({type:actiontypes.CREATE_EVENT_FAILURE,err})
        })
    }
}