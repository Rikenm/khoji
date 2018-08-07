import {apiCall, setTokenHeader} from "../../services/api";

import {SET_CURRENT_USER} from "../actionTypes";
import {addError, removeError} from "./error";

export function setCurrentUser(user){
    return {
        type:SET_CURRENT_USER,
        user
    }

}



export function setAuthorizationToken(token){
    setTokenHeader(token)
}


export function logout(){
 //thunk 
    return dispatch => {

        console.log("dispatching log off")
        localStorage.clear();
        setAuthorizationToken(false)
        dispatch(setCurrentUser({}))

    }


}


export function authUser(type,userData){
    return dispatch => {

        console.log("type", type)
        console.log("datatoserver",userData)
        return new Promise((resolve,reject)=>{  // returning promise

            return apiCall("post",`http://localhost:5000/api/v1/${type}`,userData).then(
                res=>{

                
                
                var data = res.data[0]

                console.log("datasentfromserver",data) 

                localStorage.setItem("refreshToken",data.refreshToken) // from server token 
                localStorage.setItem("accessToken",data.accessToken)
                localStorage.setItem("userInfo",JSON.stringify(data))
                setAuthorizationToken(data.accessToken)
                dispatch(setCurrentUser(data)) // from server user
                dispatch(removeError())
                resolve();
            }).catch(err =>{
                    

                    dispatch(addError(err.message?err.message:err.msg)) //error // make biken change thid to message
                    reject()

            })
        })
    }

}