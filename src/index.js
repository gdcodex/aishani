import React from 'react';
import ReactDOM from 'react-dom';
import App from './redux/myapp/App';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './redux/reducer/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';





//store
const store = createStore(rootReducer,composeWithDevTools());
console.log(store.getState());
store.subscribe(()=>{console.log("Current State:",store.getState())})


//rendering the dom
ReactDOM.render(

   <Provider store={store}> <App /> </Provider>,
  document.getElementById('root')
);



