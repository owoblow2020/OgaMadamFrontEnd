import { HOME_SEARCH_SUCCESS, HOME_LIST_SUCCESS, WORK_APPLY_FAILED, FETCH_TRANSACTION_SUCCESS, EMPLOYEE_BY_EMPLOYER_SUCCESS, TICKET_BY_USER_SUCCESS, NOTIFICATION_BY_USER_SUCCESS} from "../actions/actonTypes";


export const SearchReducer = (state = [], action) =>{
    switch(action.type){
        case HOME_SEARCH_SUCCESS :
            return action;
        default:
            return state;
    }
}

export const CategoryReducer = (state = [], action) =>{
    switch (action.type) {
        case HOME_LIST_SUCCESS:
            return action;    
        default:
            return state;
    }
}

export const ApplyReducer = (state={}, action) =>{
    switch (action.type) {
        case WORK_APPLY_FAILED:
            return action;    
        default:
            return state;
    }
}

export const TransReducer = (state={}, action) =>{
    switch (action.type) {
        case FETCH_TRANSACTION_SUCCESS:
            return action;    
        default:
            return state;
    }
}

export const EmployeeByEmployerReducer = (state={}, action) => {
    switch (action.type) {
        case EMPLOYEE_BY_EMPLOYER_SUCCESS:
            return action;    
        default:
            return state;
    }
}

export const TicketByUser = (state={}, action) =>{
    switch (action.type) {
        case TICKET_BY_USER_SUCCESS:
            return action.trans.Data;    
        default:
            return state;
    }
}

export const NotificationByUser = (state={}, action) =>{
    switch (action.type) {
        case NOTIFICATION_BY_USER_SUCCESS:
            return action.trans.Data;    
        default:
            return state;
    }
}