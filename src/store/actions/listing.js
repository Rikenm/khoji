import {apiCall} from "../../services/api"
import {addError} from "./error";
import {LOAD_LISTINGS,REMOVE_LISTING} from "../actionTypes"

export const loadListings = Lists => ({
    type: LOAD_LISTINGS,
    listings
})


//api request

export const fetchListings = () =>{
    return dispatch =>{
            return apiCall("GET","/api/")
            .then((res)=>{
                    dispatch(loadListings(res))
                    

            }).catch(err=>{
                addError(err.message)
            })
    }

}