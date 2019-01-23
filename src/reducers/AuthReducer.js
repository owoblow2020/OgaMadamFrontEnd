import { LOGIN_TASK } from "../actions/actonTypes";

const initialState = {
    item: {}
}

export const AuthReducer = (state = initialState, action) =>{
    switch (action.type) {
        case LOGIN_TASK:
            return {
                ...state,
                details:action.payload
            }    
        default:
            return state;
    }
}