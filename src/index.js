import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; //For re-rendering after changing state
import shoppingListItemReducer from './reducers/shoppingListItemReducer';
import App from './App';
import './index.css';

const store = createStore(
  shoppingListItemReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  //passed store instance into Provider as a prop, making it available to all of our other components. we don't want every component to re-render so let's use connect.
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
);
