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
export default fetchUsers;
