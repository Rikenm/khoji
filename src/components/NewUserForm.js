import React from "react";
import NewUser from "../containers/NewUser"


const NewUserForm = (props) => {


    const {match} = props
   const param = match.params

    

    return(
        <div className="full-page">
           <div className="center-card">
            <NewUser {...props} {...param}></NewUser>
           </div>
           
          
        </div>
    )
   

}


export default NewUserForm
