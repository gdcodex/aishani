import eventReducer from './eventreducer'
import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'
import authReducer from './authreducer'

const rootReducer =combineReducers({
   event:eventReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    auth:authReducer
})
export default rootReducer;