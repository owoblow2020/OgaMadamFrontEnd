import {
    EMPLOYEE_LOGIN_API, LOCAL_AUTHORIZATION, HOME_SEARCH_API, LIST_CATEGORY_API, HOME_SIX_WORKER, REGISTER_EMPLOYEE, TRANSACTION_BY_EMPLOYER, EMPLOYEE_BY_EMPLOYER_API, TICKET_API, NOTIFICATION_API
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
        }).catch(function (err) {
            console.log(err);
        });

}

function* getCategory() {
    return yield fetch(LIST_CATEGORY_API, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: LOCAL_AUTHORIZATION
        }
    }).then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        }).catch(function (err) {
            console.log('Category Server: ' + err);
        });
}

function* getListWorker() {
    return yield fetch(HOME_SIX_WORKER, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: LOCAL_AUTHORIZATION
        }
    }).then((response) => response.json())
        .then((responseJson) => {
            //console.log(responseJson);
            return responseJson;
        }).catch(function (err) {
           // console.log('Category Server: ' + err);
        });
}

function* postWorkerApply(param) {
    const postParam = {
        Email: param.workParam.Email,
        FirstName: param.workParam.FirstName,
        LastName: param.workParam.LastName,
        Address: param.workParam.Address,
        DateOfBirth: param.workParam.DateOfBirth,
        PlaceOfBirth: param.workParam.PlaceOfBirth,
        MiddleName: param.workParam.MiddleName,
        PhoneNumber: param.workParam.PhoneNumber,
        StateOfOrigin: param.workParam.StateOfBirth,
        Sex: param.workParam.Sex,
        ExtraData: {
            BVN: param.workParam.BVN,
            NIMC: param.workParam.NIMC,
            QualificationType: param.workParam.QualificationType
        }

    }
    return yield fetch(REGISTER_EMPLOYEE, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: LOCAL_AUTHORIZATION
        },
        body: JSON.stringify(postParam)
    }).then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        }).catch(function (err) {
            console.log(err);
        });

}

function* getTransaction(employerId){
    return yield fetch(TRANSACTION_BY_EMPLOYER, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: LOCAL_AUTHORIZATION
        },
        body: JSON.stringify({
            "EmployerId": employerId.employerId
        })
    }).then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        }).catch(function (err) {
            console.log(err);
        });
}

function* getEmployeeByEmployer(employerId){
    return yield fetch(EMPLOYEE_BY_EMPLOYER_API, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: LOCAL_AUTHORIZATION
        },
        body: JSON.stringify({
            "EmployerId": employerId.employerId
        })
    }).then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        }).catch(function (err) {
            console.log(err);
        });
}

function* getTicket(userId){
    return yield fetch(TICKET_API, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: LOCAL_AUTHORIZATION
        },
        body: JSON.stringify({
            "EmployerId":userId.userId
        })
    }).then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        }).catch(function (err) {
            console.log(err);
        });
}

function* getNotification(userId){    
    return yield fetch(NOTIFICATION_API, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: LOCAL_AUTHORIZATION
        },
        body: JSON.stringify({
            "EmployerId":userId.userId
        })
    }).then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        }).catch(function (err) {
            console.log(err);
        });
}

export const Api = {
    getToken,
    getHomeSearch,
    getCategory,
    getListWorker,
    postWorkerApply,
    getTransaction,
    getEmployeeByEmployer,
    getTicket,
    getNotification
}