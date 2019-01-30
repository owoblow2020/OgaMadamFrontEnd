import { takeLatest, put } from 'redux-saga/effects';
import { LOGIN_TASK, HOME_SEARCH_WORKER, HOME_SEARCH_SUCCESS, HOME_LIST_CATEGORY, HOME_LIST_SUCCESS, HOME_LIST_WORKER} from '../actions/actonTypes';
import { Api } from './ApiSaga';
import { loginActionSuccess} from '../actions';

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

function* fetchSearch(searchParam){
    try{
        const search = yield Api.getHomeSearch(searchParam);
        if(search.ResponseCode === 200){
           yield put({type:HOME_SEARCH_SUCCESS, param:search.Data});
        }
    }catch(err){

    }
}

export function* watchHomeSearch(){
    yield takeLatest(HOME_SEARCH_WORKER, fetchSearch);
}

function* fetchCategory(){
    try{
        const listCat = yield Api.getCategory();
        if(listCat.ResponseCode === 200){
            yield put({type:HOME_LIST_SUCCESS, cat:listCat.Data});
        }
    }catch(err){
        console.log(err);
    }
}

export function* watchListCategory(){
    yield takeLatest(HOME_LIST_CATEGORY, fetchCategory);
}

function* listWorker(){
    try{
        const search = yield Api.getListWorker();
        if(search.ResponseCode === 200){
            yield put({type:HOME_SEARCH_SUCCESS, param:search.Data});
         }
    }catch(err){
        console.log(err);
    }
}

export function* watchListWorker(){
    yield takeLatest(HOME_LIST_WORKER, listWorker);
}