import React from 'react';
import ReactDOM from 'react-dom';
import App from './firebaseApps/App1/App';
import { createStore ,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './redux/reducer/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';





//store
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
console.log(store.getState());
// store.subscribe(()=>{console.log("Current State:",store.getState())})


//rendering the dom
ReactDOM.render(

   <Provider store={store}> <App /> </Provider>,
  document.getElementById('root')
);



