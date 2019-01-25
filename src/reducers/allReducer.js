import {combineReducers} from 'redux';
import {AuthReducer, LoginReducer} from './AuthReducer';

export const allReducer = combineReducers({
    AuthReducer,
    LoginReducer
});