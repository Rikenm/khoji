import axios from "axios";
import {logout} from "../store/actions/auth"


//

export function setTokenHeader(token){
    if(token){
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    }else{
        delete axios.defaults.headers.common["Authorization"];
    }

}

//add network manager to get new access token from the refresh token



// export function apiCall(method, path, data){

//     return new Promise((resolve,reject)=>{

//         return axios[method.toLowerCase()](path,data).then(res=>{

//             console.log("resolved in apicall",res.data)

//             return resolve(res.data)
//         }).catch(err => {
//              // fix this later
//             //  console.log("err",typeof err.response !== 'undefined',err.response)
//             return reject(typeof err.response !== 'undefined' ? err.response.data.error: "Error")
//         })
//     })

// }

export function apiCall(method,path,data){
    return new Promise((resolve,reject)=>{
        api(method,path,data,(reauth,res,error)=>{
            if (reauth){
                if(doReAuth()){
                    api(method,path,data,(reauth,res,error)=>{ 
                        if (!error){resolve(res)}
                        else{

                            reject(typeof error.response !== 'undefined' ? error.response.data.error: "Error")
                        }
                    })

                }else{
                    //logout
                    logout()
                    reject()

                }
              
            } else if (error){
                return reject(typeof error.response !== 'undefined' ? error.response.data.error: "Error")

            }else{
                resolve(res)
            }
        })
    })
}





function api (method,path,data,callback){

    axios[method.toLowerCase()](path,data).then(res=>{

        callback(false,res,null)
    }).catch(err =>{

        if (err.code === 401) {
            callback(true,null,err)
        }else{
            callback(false,null,err)
        }
    })
}



function doReAuth(){
    // once token expired apicall will hit this route
        //get the refresh token from the JWT 
        if (localStorage.getItem("refreshToken")) {
        const refreshToken = localStorage.getItem("refreshToken")     
        axios["get"]("http://localhost:5012/api/v1/master",refreshToken).then(data=>{

            setTokenHeader(data.token)
            return true

        }).catch(err =>{

            return false
        }) 
    }else {
        return false
    }

}