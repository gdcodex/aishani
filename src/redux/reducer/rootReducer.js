import incrReducer from './reducer1'
import dcrReducer from './reducer2'
import {combineReducers} from 'redux';

const rootReducer =combineReducers({
    first: incrReducer,
    second: dcrReducer
})
export default rootReducer;