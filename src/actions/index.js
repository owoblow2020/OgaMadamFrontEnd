import { LOGIN_TASK } from "./actonTypes";

export const loginAuth = (loginParam)=>{
    return{
        type: LOGIN_TASK,
        payload: loginParam
    }
}