import axios from "axios"

 export  const FETCH_REQUEST = 'FETCH_REQUEST'
 export  const FETCH_SUCCESS = 'FETCH_SUCCESS'
 export  const FETCH_FAILURE = 'FETCH_FAILURE'

const request = ()=>{
    return{
        type:FETCH_REQUEST,
      
    }
}
const success = (pyl)=>{
    return{
        type:FETCH_SUCCESS,
        payload: pyl
    }
}
const failure = (pyl)=>{
    return{
        type:FETCH_FAILURE,
        payload: pyl
    }
}

const fetchUsers = () =>{
    return (dispatch)=>{
        dispatch(request())
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            dispatch(success(response.data))
        })
        .catch(err=>{
            dispatch(failure(err))
        })
    }
}

 export const renderBuddy=(user)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        //make async call
        const firestore = getFirestore();
        firestore.collection('Users').add({
            ...user,
            author: 'aisha',
            authorID: 69,
            createdAt: new Date()
        }).then(()=>{
            dispatch({type: 'CREATE_USER', user})
        }).catch((err)=>{
            dispatch({type:"CREATE_USER_ERR", err})
        })
        
    }
}



export default fetchUsers;



