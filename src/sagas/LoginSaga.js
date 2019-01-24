import { takeLatest } from 'redux-saga/effects';
import { LOGIN_TASK } from '../actions/actonTypes';
import {
    TOKEN_API, GRANT_TYPE,
    USERNAME, PASSWORD
} from './Utility';
import axios from 'axios';

function* fetchLogin() {
    //console.log("hello");
    const postParam = {
        grant_type: GRANT_TYPE,
        username: USERNAME,
        password: PASSWORD
    }
    try {
        const token = yield fetch("http://localhost:50942/api/Account/Register", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "Password":"1234567aD#",
                "Email":"viia001@yahoo.com",
                "FirstName":"Testers",
                "LastName":"Tests",
                "Address":"wuse",
                "DateOfBirth":"2018/10/05",
                "PlaceOfBirth":"Abuja",
                "MiddleName":"hitester",
                "PhoneNumber":"0803457746",
                "StateOfOrigin":"fct",
                "ConfirmPassword":"1234567aD#",
                "Sex":"Female"
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                //return responseJson;
            }).catch(function(error) {
                console.log(error);
            });

        console.log(token);

    } catch (error) {
        console.log("error occurred");
    }
}


export function* watchFetchLogin() {
    yield takeLatest(LOGIN_TASK, fetchLogin);
}