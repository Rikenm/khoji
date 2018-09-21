import {apiCall,apiCallNoReAuth} from "../../services/api"
import {addError,removeError} from "./error";
import {LOAD_POST} from "../actionTypes"
import {URL} from "../../util/constant/url"

export const loadPost = (post) => {
     
    return({
        type: LOAD_POST,
        payload: post

    })

}

export const fetchPost = (postid) =>{
    return dispatch =>{
            return apiCallNoReAuth("GET",URL+`/api/v1/post/${postid}`)
            .then((res)=>{
                   
                   dispatch(loadPost(res))
                    

            }).catch(err=>{
                // dispatch(addError(err.message))
                dispatch(addError("Error occured"))
                setTimeout(() => {
                    dispatch(removeError())
                  }, 2000)
            })
    }

}


export const newPost = (data) =>{
 
    return (dispatch) =>{
        
     return new Promise((resolve,reject)=>{  
        return apiCall("post",URL+"/api/v1/createpost",data)
        .then(res => {
             console.log(res)
            try {
                resolve(res.data.data[0].insertId) 
                
            }catch(err){
                
                dispatch(addError(err?err:"Error occured")) 
                setTimeout(() => {
                    dispatch(removeError())
                  }, 2000)
                
                
                reject(err) 
            }


            // dispatch(removeError())
            

            

        })
        .catch(err => {
            dispatch(addError("Error occured")) 
            setTimeout(() => {
                dispatch(removeError())
              }, 2000)
            reject(err) 
        })

      })

    }



}