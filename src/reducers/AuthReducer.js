import { LOGIN_SUCCESS, AUTHENTICATION, LOGIN_FAILED } from "../actions/actonTypes";

const initialState = {};

export const AuthReducer = (state = initialState, action) =>{
    switch (action.type) {
        case LOGIN_SUCCESS:
            return action;
        case LOGIN_FAILED :
            return action;             
        default:
            return state;
    }
}

export const LoginReducer =(state = initialState, action)=>{
    switch (action.type) {
        case AUTHENTICATION:
            return action;
        default:
            return state;
    }

}