import {fork} from 'redux-saga/effects';
import { watchFetchLogin } from './LoginSaga';

export default function* rootSaga(){
    yield fork(watchFetchLogin)
}