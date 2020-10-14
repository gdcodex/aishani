import React from 'react';
import ReactDOM from 'react-dom';
import App from './firebaseApps/App2/components/App';
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


const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
  userProfile: 'users', // where profiles are stored in database
  presence: 'presence', // where list of online users is stored in database
  sessions: 'sessions'
};

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div>Loading Screen...</div>;
      return children
}


console.log(store.getState());
// store.subscribe(()=>{console.log("Current State:",store.getState())})


//rendering the dom
ReactDOM.render(

   <Provider store={store}>  <ReactReduxFirebaseProvider {...rrfProps}><AuthIsLoaded> <App /> </AuthIsLoaded>  </ReactReduxFirebaseProvider> </Provider>,
  document.getElementById('root')
);



