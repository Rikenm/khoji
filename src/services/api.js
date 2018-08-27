import axios from "axios";
import {logout} from "../store/actions/auth"
import {configureStore} from "../store/index";
import {URL} from "../util/constant/url"


//



export function setTokenHeader(token){
    if(token){
         console.log("adding header")
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    }else{
        delete axios.defaults.headers.common["Authorization"];
    }

}

//add network manager to get new access token from the refresh token



export function apiCallNoReAuth(method, path, data){

    return new Promise((resolve,reject)=>{

        return axios[method.toLowerCase()](path,data).then(res=>{

            console.log("resolved in apicall",res.data)

            return resolve(res.data)
        }).catch(err => {
             // fix this later
            //  console.log("err",typeof err.response !== 'undefined',err.response)
            return reject(typeof err.response !== 'undefined' ? err.response.data.error: "Error")
        })
    })

}

export function apiCall(method,path,data){
    return new Promise((resolve,reject)=>{
        api(method,path,data,(reauth,res,error)=>{
            console.log("in api",reauth)
            if (reauth){
                console.log("inside  reauth if",reauth)
                
                doReAuth().then((wasReAuthSeccuessful)=>{
                    console.log("wasReAuthSeccuessful",wasReAuthSeccuessful)    
                    if(wasReAuthSeccuessful){
                        
                        api(method,path,data,(reauth,res,error)=>{ 
                            if (!error){return resolve(res)}
                            else{
    
                                return reject(typeof error.response !== 'undefined' ? error.response.data.error: "Error")
                            }
                        })
    
                    }else{
                        //logout
                        // no reject just redirect 
                        console.log("force logout")
                        
                        return reject(new Error(401))
                       
    
                    }

                })
                
                
              
            } else if (error){
                return reject(typeof error.response !== 'undefined' ? error.response.data.error: "Error")

            }else{
                resolve(res)
            }
        })
    })
}





function api(method,path,data,callback){

    axios[method.toLowerCase()](path,data).then(res=>{

        callback(false,res,null)
    }).catch(err =>{

        if (err.response.status === 401) {
            
            callback(true,null,err)
        }else{
            
            callback(false,null,err)
        }
    })
}



function doReAuth(){
    // once token expired apicall will hit this route
        //get the refresh token from the JWT 
        console.log("in reauth")

        return new Promise((resolve,reject)=>{
      
            if (localStorage.getItem("refreshToken")) {
           
                const refreshToken = localStorage.getItem("refreshToken")   
                setTokenHeader(refreshToken)  
                axios["post"](URL+"/api/v1/accesstoken").then(res=>{
        
                   //add try catch here
                   
                    setTokenHeader(res.data.data.access_token)
                    localStorage.setItem("refreshToken",res.data.data.refresh_token)
                    localStorage.setItem("accessToken",res.data.data.access_token)
                    return resolve(true)
        
                }).catch(err =>{
                    
                    return resolve(false)
                    
                }) 
            }else {
                
                return resolve(false)
            }

        })

        

}

// function forceLogout(){
//     localStorage.removeItem("refreshToken")
//     localStorage.removeItem("accessToken")
//     localStorage.removeItem("userInfo")

// }