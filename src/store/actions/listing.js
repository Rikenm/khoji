import {apiCall, apiCallNoReAuth} from "../../services/api"
import {addError,removeError} from "./error";
import {LOAD_LISTINGS} from "../actionTypes"
import {URL} from "../../util/constant/url"
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
            return apiCallNoReAuth("GET",URL+`/api/v1/posts/${category}/${subcategory}?country=${location}&state=${state}&city=${city}&size=${20}&offset=${offset}`)
            .then((res)=>{
                console.log("list",res)
                    dispatch(loadListings(res))
                    

            }).catch(err=>{
                console.log("err from the dispatch",err)
                dispatch(loadListings())
                dispatch(addError(err.message || err.msg))
                setTimeout(() => {
                    dispatch(removeError())
                  }, 2000)
            })
    }

}