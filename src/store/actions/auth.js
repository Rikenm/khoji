import {apiCall, setTokenHeader, apiCallNoReAuth} from "../../services/api";
import { Redirect } from 'react-router-dom'
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
        // localStorage.clear();
        localStorage.removeItem("refreshToken")
        localStorage.removeItem("accessToken")
        localStorage.removeItem("userInfo")


        setAuthorizationToken(false)
        dispatch(setCurrentUser({}))
       
    }


}


export function authUser(type,userData){
    return dispatch => {

        console.log("type", type)
        console.log("datatoserver",userData)
        return new Promise((resolve,reject)=>{  // returning promise

            return apiCallNoReAuth("post",`http://localhost:5012/api/v1/${type}`,userData).then(
                res=>{

                //add try catch here
                
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
                    
                    
                    dispatch(addError(err.msg?err.msg:err)) //error // make biken change thid to message
                    reject()

            })
        })
    }

}