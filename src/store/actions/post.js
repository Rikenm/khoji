import {apiCall,apiCallNoReAuth} from "../../services/api"
import {addError} from "./error";
import {LOAD_POST} from "../actionTypes"

export const loadPost = (post) => {
     
    return({
        type: LOAD_POST,
        payload: post

    })

}

export const fetchPost = (postid) =>{
    return dispatch =>{
            return apiCallNoReAuth("GET",`http://localhost:5012/api/v1/post/${postid}`)
            .then((res)=>{
                   
                   dispatch(loadPost(res))
                    

            }).catch(err=>{
                // dispatch(addError(err.message))
                dispatch(addError("Error occured"))
            })
    }

}


export const newPost = (data) =>{
 
    return (dispatch) =>{
         //new post posting  
     return new Promise((resolve,reject)=>{  
        return apiCall("post","http://localhost:5012/api/v1/createpost",data)
        .then(res => {
             console.log(res)
            try {
                resolve(res.data.data[0].insertId) 
                
            }catch(err){
                dispatch(addError("Error occured")) 
                console.log(err)
                reject(err) 
            }


            // dispatch(removeError())
            

            

        })
        .catch(err => {
            dispatch(addError("Error occured")) 
            reject(err) 
        })

      })

    }



}