import React from 'react';
import ReactDOM from 'react-dom';
import App from './firebaseApps/App1/App';
import { createStore ,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './redux/reducer/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
//firebase imports
import {
  reduxFirestore,
  getFirestore,
  createFirestoreInstance
} from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import fbConfig from "./config/fbconfig";
import firebase from "firebase/app";





//store
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),  reduxFirestore(firebase, fbConfig)));


const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};


console.log(store.getState());
// store.subscribe(()=>{console.log("Current State:",store.getState())})


//rendering the dom
ReactDOM.render(

   <Provider store={store}>  <ReactReduxFirebaseProvider {...rrfProps}> <App />   </ReactReduxFirebaseProvider> </Provider>,
  document.getElementById('root')
);



