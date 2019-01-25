import {
    EMPLOYEE_LOGIN_API, LOCAL_AUTHORIZATION
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

export const Api = {
    getToken
}