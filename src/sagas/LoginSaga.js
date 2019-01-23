import { takeLatest } from 'redux-saga/effects';
import { LOGIN_TASK } from '../actions/actonTypes';
import { TOKEN_API, GRANT_TYPE, CLIENT_ID, CLIENT_SECRET, USERNAME, PASSWORD } from './Utility';

function* fetchLogin() {
    //console.log("hello");
    try {
        const token = yield fetch(TOKEN_API, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                grant_type: GRANT_TYPE,
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                username: USERNAME,
                password: PASSWORD
            }),
            mode: 'no-cors'
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);

                return responseJson;
            });

            console.log(token);

    } catch (error) {
        console.log(error);
    }
}


export function* watchFetchLogin() {
    yield takeLatest(LOGIN_TASK, fetchLogin);
}