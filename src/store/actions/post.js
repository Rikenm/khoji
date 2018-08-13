import {apiCall} from "../../services/api"
import {addError} from "./error";
import {LOAD_POST,REMOVE_LISTING} from "../actionTypes"

export const loadPost = (post) => {
     
    return({
        type: LOAD_POST,
        payload: post

    })

}

export const fetchPost = (postid) =>{
    return dispatch =>{
            return apiCall("GET",`/api/`)
            .then((res)=>{
                    dispatch(loadPost(res))
                    

            }).catch(err=>{
                dispatch(addError(err.message))
            })
    }

}
