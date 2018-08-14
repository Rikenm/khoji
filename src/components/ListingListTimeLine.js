import React from "react"
import queryString from  'query-string';
import ListingList from "../containers/ListingList"
import Navbar from "../containers/Navbar"
import Typography from "@material-ui/core/Typography";
import "../style/listitemstyle.css"

const ListingListTimeLine = props => {

    
    let params = queryString.parse(props.location.search)

    console.log(params)

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

