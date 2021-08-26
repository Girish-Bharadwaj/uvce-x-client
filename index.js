import  React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/auth';
import App from './App';
import { registerRootComponent } from 'expo';

const store = createStore(authReducer, compose(applyMiddleware(thunk)));


function index() {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  );
}

export default registerRootComponent(index);
