import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import shoppingListItemReducer from './reducers/shoppingListItemReducer';
import App from './App';
import './index.css';

const store = createStore(
  shoppingListItemReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// 1) import provider from React Redux
// 2) Wrap provider to React App
// 3) passed store into provider as prop (now available to all componenets)
ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>,
  </Provider>
  document.getElementById('root')
);
