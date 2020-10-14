
export const signup = (newUser) =>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        const firebase = getFirebase()
        const firestore = getFirestore()

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then(res=>{
            return firestore.collection('user').doc(res.user.uid).set(
                {
                    firstname: newUser.firstname,
                    lastname: newUser.lastname,
                    initials: newUser.firstname[0] + newUser.lastname[0]
                }
            ).then(()=>{
                dispatch({type:'USER_CREATED'})
            })
            }).catch(err=>{
                dispatch({type:"FAILED_SIGNUP",err})
        })
        
    }
    
}



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

