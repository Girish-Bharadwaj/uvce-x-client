import { combineReducers } from 'redux';

import auth from './auth.js';
import feeds from './feeds.js'


export default combineReducers({ auth, feeds });