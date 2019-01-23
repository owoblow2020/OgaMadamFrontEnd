import {all} from 'redux-saga/effects';
import { watchFetchLogin } from './LoginSaga';

export default function* rootSaga(){
    yield all([
        watchFetchLogin()
    ])
}