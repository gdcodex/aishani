
const signIn = (credentials) =>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{
    const firebase = getFirebase()

    firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
    ).then(()=>{
        dispatch({type:"LOG_IN_SUCCESS"})
    }).catch(err=>{
        dispatch({type:"USER_ERROR",err})
    })
    }  
}
export default signIn

export const signout = (credentials)=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        const firebase = getFirebase()
        firebase.auth().signOut().then(()=>{
            dispatch({type:"SIGN_OUT"})
        });
    }
}