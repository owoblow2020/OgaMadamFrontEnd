import { all } from 'redux-saga/effects';
import {
    watchFetchLogin, watchHomeSearch,
    watchListCategory, watchListWorker
} from './LoginSaga';

export default function* rootSaga() {
    yield all([
        watchFetchLogin(),
        watchHomeSearch(),
        watchListCategory(),
        watchListWorker()
    ]);
}