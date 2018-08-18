import axios from "axios";


//

export function setTokenHeader(token){
    if(token){
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    }else{
        delete axios.defaults.headers.common["Authorization"];
    }

}

//add network manager to get new access token from the refresh token



export function apiCall(method, path, data){

    return new Promise((resolve,reject)=>{

        return axios[method.toLowerCase()](path,data).then(res=>{

            console.log("resolved",res.data)

            return resolve(res.data)
        }).catch(err => {
             // fix this later
            //  console.log("err",typeof err.response !== 'undefined',err.response)
            return reject(typeof err.response !== 'undefined' ? err.response.data.error: "Error")
        })
    })

}