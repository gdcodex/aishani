import incrReducer from './reducer1'
import dcrReducer from './reducer2'
import reducer3 from './reducer3'
import userReducer from './userreducer'
import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore'

const rootReducer =combineReducers({
    first: incrReducer,
    second: dcrReducer,
    third: reducer3,
    user: userReducer,
    firestore: firestoreReducer
})
export default rootReducer;