import { combineReducers } from 'redux';
import { AuthReducer, LoginReducer } from './AuthReducer';
import {
    SearchReducer, CategoryReducer,
    ApplyReducer, TransReducer, EmployeeByEmployerReducer,
    TicketByUser, NotificationByUser, EmployerRegister
} from './SearchReducer';

export const allReducer = combineReducers({
    AuthReducer,
    LoginReducer,
    SearchReducer,
    CategoryReducer,
    ApplyReducer,
    TransReducer,
    EmployeeByEmployerReducer,
    TicketByUser,
    NotificationByUser,
    EmployerRegister
});