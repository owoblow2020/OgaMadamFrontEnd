import { HOME_SEARCH_SUCCESS, HOME_LIST_SUCCESS} from "../actions/actonTypes";


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