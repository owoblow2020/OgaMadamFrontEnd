import { all } from 'redux-saga/effects';
import {
    watchFetchLogin, watchHomeSearch,
    watchListCategory, watchListWorker, watchWorkerApply, watchFetchTrans,
    watchEmployeeByEmployer, watchTicket, watchNotification,
    watchEmployerLogin
} from './LoginSaga';

export default function* rootSaga() {
    yield all([
        watchFetchLogin(),
        watchHomeSearch(),
        watchListCategory(),
        watchListWorker(),
        watchWorkerApply(),
        watchFetchTrans(),
        watchEmployeeByEmployer(),
        watchTicket(),
        watchNotification(),
        watchEmployerLogin()
    ]);
}