import React from 'react';
import ReactDOM from 'react-dom';
import App from './TrialProjects/Todolist/App';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import rootReducers from './redux/reducer/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as actions from './redux/actions'
// import thunk from 'redux-thunk';




//store
const store = createStore(rootReducers, composeWithDevTools());
//store methods
//1 get current state
console.log(store.getState());
//2 run whenever there is a state change
const unsubscribe = store.subscribe(()=>console.log("Updated state", store.getState()));
//3 dispatch action so as to bring in state change
store.dispatch(actions.change());
store.dispatch(actions.change());

 //calling function returned by subscribe method unsubscribes to store updates
  unsubscribe();
  store.dispatch(actions.change());
 






//rendering the dom
ReactDOM.render(

   <Provider store={store}> <App /> </Provider>,
  document.getElementById('root')
);


