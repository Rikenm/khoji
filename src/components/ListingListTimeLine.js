import React from "react"

import ListingList from "../containers/ListingList"
import Navbar from "../containers/Navbar"
import Typography from "@material-ui/core/Typography";
import "../style/listitemstyle.css"

const ListingListTimeLine = props => {

    

    return(
        <div className ="row">

       
          
            <Navbar/>
           <div className="list"> 
            <Typography variant="title" >
              Category: Jobs
            </Typography>
            
            <ListingList /> 

            </div>
            
        
          
            
        </div>
    )
}

export default ListingListTimeLine

