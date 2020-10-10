import React from 'react';
import ReactDOM from 'react-dom';
import App from './TrialProjects/Calculator/App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducers from './redux/reducer/rootReducer';
// import thunk from 'redux-thunk';


//store
const store = createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//rendering the dom
ReactDOM.render(

   <Provider store={store}> <App /> </Provider>,
  document.getElementById('root')
);


