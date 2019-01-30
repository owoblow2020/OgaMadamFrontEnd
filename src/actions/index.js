import { LOGIN_TASK, LOGIN_SUCCESS, AUTHENTICATION, HOME_SEARCH_WORKER, HOME_LIST_CATEGORY, HOME_LIST_WORKER } from "./actonTypes";

export const loginAuth = (inputName)=>{
    return{
        type: LOGIN_TASK,
        email: inputName.email,
        password:inputName.password
    }
}

export const loginActionSuccess = (tokenParam)=>{
    return {
        type:LOGIN_SUCCESS,
        isAuth: true,
        address: tokenParam.Address,
        bvn: tokenParam.BVN,
        dateofbirth: tokenParam.DateOfBirth,
        email: tokenParam.Email,
        firstname: tokenParam.FirstName,
        lastname: tokenParam.LastName,
        middlename: tokenParam.MiddleName,
        NIMC: tokenParam.NIMC,
        phonenumber: tokenParam.PhoneNumber,
        placeofbirth: tokenParam.PlaceOfBirth,
        sex: tokenParam.Sex,
        stateofOrigin: tokenParam.StateOfOrigin
    }
}

export const authAction = (authParam) => {
    return {
        type:AUTHENTICATION,
        auth:authParam.isAuth
    }
}

export const homeSearchWorker = (searchParam) =>{
    return {
        type: HOME_SEARCH_WORKER,
        category:searchParam.category,
        location:searchParam.location
    }
}

export const listCategory = () =>{
    return {
        type: HOME_LIST_CATEGORY
    }
}

export const listWorker =() =>{
    return {
        type: HOME_LIST_WORKER
    }
}