import { LOGIN_TASK, LOGIN_SUCCESS, AUTHENTICATION, HOME_SEARCH_WORKER, HOME_LIST_CATEGORY, HOME_LIST_WORKER, WORK_APPLY, LOGIN_FAILED } from "./actonTypes";

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
        address: tokenParam.Data.Address,
        bvn: tokenParam.Data.BVN,
        dateofbirth: tokenParam.Data.DateOfBirth,
        email: tokenParam.Data.Email,
        firstname: tokenParam.Data.FirstName,
        lastname: tokenParam.Data.LastName,
        middlename: tokenParam.Data.MiddleName,
        NIMC: tokenParam.Data.NIMC,
        phonenumber: tokenParam.Data.PhoneNumber,
        placeofbirth: tokenParam.Data.PlaceOfBirth,
        sex: tokenParam.Data.Sex,
        stateofOrigin: tokenParam.Data.StateOfOrigin,
        role:tokenParam.Data.Role,
        placeOfWork:tokenParam.Data.PlaceOfWork,
        nextOfKin:tokenParam.Data.NextOfKin,
        nextOfKinPhoneNumber:tokenParam.Data.NextOfKinPhoneNumber,
        nextOfKinAddress:tokenParam.Data.NextOfKinAddress,
        profession:tokenParam.Data.Profession,
        responseCode:tokenParam.ResponseCode,
        message:tokenParam.Message
    }
}

export const loginActionFailed = (tokenParam) =>{
    return {
        type: LOGIN_FAILED,
        responseCode:tokenParam.ResponseCode,
        message:tokenParam.Message

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

export const workApply = (workParam) =>{
    return {
        type:WORK_APPLY,
        workParam
    }
}