import { takeLatest, put } from 'redux-saga/effects';
import { LOGIN_TASK} from '../actions/actonTypes';
import { Api } from './ApiSaga';
import { loginActionSuccess } from '../actions';

function* fetchLogin(inputName) {
    try {
        const res = yield Api.getToken(inputName);
        if (res.ResponseCode === 200) {
            //console.log(res.Data);
            yield put(loginActionSuccess(res.Data));
        } else {

        }

    } catch (error) {
        console.log("error occurred");
    }
}


export function* watchFetchLogin() {
    yield takeLatest(LOGIN_TASK, fetchLogin);
}