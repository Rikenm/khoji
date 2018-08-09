import {apiCall} from "../../services/api"
import {addError} from "./error";
import {LOAD_LISTINGS,REMOVE_LISTING} from "../actionTypes"

export const loadListings = listings => ({
    type: LOAD_LISTINGS,
    listings
})


//api request

export const fetchListings = (whichstate,category,page) =>{
    return dispatch =>{
            return apiCall("GET",`/api/post/{$whichstate}/{$category}/{$page}`)
            .then((res)=>{
                    dispatch(loadListings(res))
                    

            }).catch(err=>{
                dispatch(addError(err.message))
            })
    }

}

export const newPost = (text) =>{
 
    return (dispatch) =>{
         //new post posting   
        return apiCall("post","/api/post",{})
        .then(res => {

        })
        .catch(err => {
            dispatch(addError(err.message))  
        })

    }



}