import incrReducer from './reducer1'
import dcrReducer from './reducer2'
import reducer3 from './reducer3'
import {combineReducers} from 'redux';

const rootReducer =combineReducers({
    first: incrReducer,
    second: dcrReducer,
    third: reducer3
})
export default rootReducer;