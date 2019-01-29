import {
    EMPLOYEE_LOGIN_API, LOCAL_AUTHORIZATION, HOME_SEARCH_API, LIST_CATEGORY_API
} from './Utility';

function* getToken(inputName) {
    return yield fetch(EMPLOYEE_LOGIN_API, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: LOCAL_AUTHORIZATION
        },
        body: JSON.stringify({
            "Email": inputName.email,
            "Password": inputName.password
        })
    }).then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        })
}

function* getHomeSearch(searchParam) {
    return yield fetch(HOME_SEARCH_API, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: LOCAL_AUTHORIZATION
        },
        body: JSON.stringify({
            "Category": searchParam.category,
            "Location": searchParam.location
        })
    }).then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        }).catch(function(err) {
            console.log(err);
        });

}

function* getCategory(){
    return yield fetch(LIST_CATEGORY_API,{
        method:'GET',
        headers:{
            Accept:'application/json',
            Authorization:LOCAL_AUTHORIZATION
        }
    }).then((response) => response.json())
    .then((responseJson) => {
        return responseJson;
    }).catch(function(err) {
        console.log('Category Server: '+err);
    });
}

export const Api = {
    getToken,
    getHomeSearch,
    getCategory
}