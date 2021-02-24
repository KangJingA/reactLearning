import { combineReducers } from 'redux';
import authReducer from './authReducer';

// reducer will make the states
export default combineReducers( {
    auth: authReducer
})