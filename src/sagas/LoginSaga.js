import { takeLatest, put } from 'redux-saga/effects';
import { LOGIN_TASK, HOME_SEARCH_WORKER, HOME_SEARCH_SUCCESS, HOME_LIST_CATEGORY, HOME_LIST_SUCCESS, HOME_LIST_WORKER, WORK_APPLY, WORK_APPLY_FAILED, FETCH_TRANSACTION, FETCH_TRANSACTION_SUCCESS, EMPLOYEE_BY_EMPLOYER, EMPLOYEE_BY_EMPLOYER_SUCCESS, TICKET_BY_USER, TICKET_BY_USER_SUCCESS, NOTIFICATION_BY_USER, NOTIFICATION_BY_USER_SUCCESS, EMPLOYER_REGISTER, EMPLOYER_REGISTER_SUCCESS, EMPLOYER_REGISTER_FAILED} from '../actions/actonTypes';
import { Api } from './ApiSaga';
import { loginActionSuccess, loginActionFailed} from '../actions';

function* fetchLogin(inputName) {
    try {
        const res = yield Api.getToken(inputName);
        if (res.ResponseCode === 200) {
            yield put(loginActionSuccess(res));
        } else {
            yield put(loginActionFailed(res));
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

function* workApplyAction(param){
    try{
        const apply = yield Api.postWorkerApply(param);
        if(apply.ResponseCode === 200){
            //yield put({type:HOME_SEARCH_SUCCESS, param:search.Data});
         }else{
             yield put({type:WORK_APPLY_FAILED, param:apply})
         }
    }catch(err){
        console.log(err);
    }
}

export function* watchWorkerApply(){
    yield takeLatest(WORK_APPLY, workApplyAction);
}

function* getTrans(employerId){
    try{
        const trans = yield Api.getTransaction(employerId);
        if(trans.ResponseCode === 200){
            yield put({type:FETCH_TRANSACTION_SUCCESS, trans:trans.Data});
         }else{
             //yield put({type:WORK_APPLY_FAILED, param:apply})
         }
    }catch(err){
        console.log(err);
    }
}

export function* watchFetchTrans(){
    yield takeLatest(FETCH_TRANSACTION, getTrans);
}

function* employeeByEmployer(employerId){
    try{
        const employee = yield Api.getEmployeeByEmployer(employerId);
        if(employee.ResponseCode === 200){
            yield put({type:EMPLOYEE_BY_EMPLOYER_SUCCESS, trans:employee.Data});
         }else{
             //yield put({type:WORK_APPLY_FAILED, param:apply})
         }
    }catch(err){
        console.log(err);
    }
}

export function* watchEmployeeByEmployer(){
    yield takeLatest(EMPLOYEE_BY_EMPLOYER, employeeByEmployer);
}

function* ticketUser(userId){
    try{
        const ticket = yield Api.getTicket(userId);
        if(ticket.ResponseCode === 200){
            yield put({type:TICKET_BY_USER_SUCCESS, trans:ticket});
         }else{
             //yield put({type:WORK_APPLY_FAILED, param:apply})
         }
    }catch(err){
        console.log(err);
    }
}

export function* watchTicket(){
    yield takeLatest(TICKET_BY_USER, ticketUser);
}

function* notification(userId){
    try{
        const ticket = yield Api.getNotification(userId);
        if(ticket.ResponseCode === 200){
            yield put({type:NOTIFICATION_BY_USER_SUCCESS, trans:ticket});
         }else{
             //yield put({type:WORK_APPLY_FAILED, param:apply})
         }
    }catch(err){
        console.log(err);
    }
}

export function* watchNotification(){
    yield takeLatest(NOTIFICATION_BY_USER, notification);
}

function* employerLogin(userId){
    try{
        const ticket = yield Api.employerLogin(userId);
        if(ticket.ResponseCode === 201){
            yield put({type:EMPLOYER_REGISTER_SUCCESS, trans:ticket});
         }else{
             yield put({type:EMPLOYER_REGISTER_FAILED, trans:ticket})
         }
    }catch(err){
        console.log(err);
    }
}

export function* watchEmployerLogin(){
    yield takeLatest(EMPLOYER_REGISTER, employerLogin);
}