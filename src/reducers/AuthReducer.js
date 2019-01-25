import { LOGIN_SUCCESS, AUTHENTICATION } from "../actions/actonTypes";

const initialState = {};

export const AuthReducer = (state = initialState, action) =>{
    switch (action.type) {
        case LOGIN_SUCCESS:
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