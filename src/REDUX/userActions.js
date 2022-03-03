import axios from "axios"
import { FETCHUSERFAILURE, FETCHUSERREQUEST, FETCHUSERSUCCESS } from "./userConstants"

export const fetchUserRequest = () => {
    return {
        type:FETCHUSERREQUEST
    }
}

export const fetchUserSuccess = (data) => {
    return {
        type:FETCHUSERSUCCESS,
        payload:data
    }
}

export const fetchUserFailure = (data) => {
    return {
        type:FETCHUSERFAILURE,
        payload:data
    }
}


export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest())
    axios.get('https://jsonplaceholder.typicodedfs.com/users')
    .then((res)=>{
        console.log(res)
        dispatch(fetchUserSuccess(res.data))
    })
    .catch((err)=>{
        console.log(err)
        dispatch(fetchUserFailure(err.message))
    })
    }
}
