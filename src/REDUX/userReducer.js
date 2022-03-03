import { FETCHUSERFAILURE, FETCHUSERREQUEST, FETCHUSERSUCCESS } from "./userConstants"

const initialState = {
    isLoading:false,
    users:[],
    error:''
}

const  userReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCHUSERREQUEST:
        return {
            ...state,
            isLoading:true
        }
        case FETCHUSERSUCCESS:
            return {
                ...state,
                users:action.payload,
                isLoading:false,
            }
        case FETCHUSERFAILURE:
            return{
                ...state,
                error:action.payload,
                isLoading:false
            }
        default:
            return state
    }   
}




export default userReducer