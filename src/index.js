import React from 'react';
import ReactDOM from 'react-dom';
import App from './firebaseApps/App2/components/App';
// import App from './TrialProjects/Aishani/Homepage/App'
import { createStore ,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './firebaseApps/App2/redux/reducers/rootreducer';
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
//auth
import { useSelector  } from 'react-redux'
import { isLoaded  } from 'react-redux-firebase';





//store
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),  reduxFirestore(firebase, fbConfig)));








const config = {
  userProfile: 'user', // where profiles are stored in database,
  useFirestoreForProfile: true
};


const rrfProps = {
  firebase,
  config,
  dispatch: store.dispatch,
  createFirestoreInstance
};



// function AuthIsLoaded({ children }) {
//   const auth = useSelector(state => state.firebase.auth)
//   if (!isLoaded(auth)) return <div>loading your life diary...📓</div>;
//       return children
// }



store.subscribe(()=>{console.log("Current State:",store.getState())})


// rendering the dom with firebase
// ReactDOM.render(

//    <Provider store={store}>  <ReactReduxFirebaseProvider {...rrfProps}><AuthIsLoaded> <App /> </AuthIsLoaded>  </ReactReduxFirebaseProvider> </Provider>,
//   document.getElementById('root')
// );



//without firebase
ReactDOM.render(

   <Provider store={store}>  <ReactReduxFirebaseProvider {...rrfProps}> <App /> </ReactReduxFirebaseProvider> </Provider>,
  document.getElementById('root')
);



