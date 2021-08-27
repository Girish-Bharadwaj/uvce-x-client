import  React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index.js';
import App from './App.js';
import { registerRootComponent } from 'expo';

const store = createStore(reducer, compose(applyMiddleware(thunk)));

function index() {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  );
}

export default registerRootComponent(index);
