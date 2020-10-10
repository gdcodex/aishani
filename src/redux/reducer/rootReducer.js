import reducer1 from './reducer1';
import reducer2 from './reducer2';
import {combineReducers} from 'redux';



const rootReducers = combineReducers({
    reducer1,        /* this means reducer1:reducer1,reducer2:reducer2 */       
    reducer2           /* or any_name: reducer1, any_NAME: reducer2*/        
});

export default rootReducers;