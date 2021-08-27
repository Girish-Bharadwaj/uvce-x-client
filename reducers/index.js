import { combineReducers } from 'redux';

import auth from './auth.js';

const createRootReducer = () => {
    return combineReducers({ auth }); 
};

export default createRootReducer;