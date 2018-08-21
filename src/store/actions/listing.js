import {apiCall} from "../../services/api"
import {addError} from "./error";
import {LOAD_LISTINGS} from "../actionTypes"

export const loadListings = listings => ({
    type: LOAD_LISTINGS,
    listings
})


//api request

export const fetchListings = (location,state="All",page,category,subcategory="All") =>{
    var city='';
    if (location === "Nepal"){
           city = state
           state = ""
    }
    const offset = 20* (page-1)
    return dispatch =>{
            return apiCall("GET",`http://localhost:5012/api/v1/posts/${category}/${subcategory}?country=${location}&state=${state}&city=${city}&size=${20}&offset=${offset}`)
            .then((res)=>{
                console.log("list",res)
                    dispatch(loadListings(res))
                    

            }).catch(err=>{
                dispatch(loadListings())
                dispatch(addError(err.message))
            })
    }

}