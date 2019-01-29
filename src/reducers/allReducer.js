import {combineReducers} from 'redux';
import {AuthReducer, LoginReducer} from './AuthReducer';
import {SearchReducer, CategoryReducer} from './SearchReducer';

export const allReducer = combineReducers({
    AuthReducer,
    LoginReducer,
    SearchReducer,
    CategoryReducer
});