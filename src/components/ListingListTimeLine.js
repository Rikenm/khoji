import React from "react"
import queryString from  'query-string';
import ListingList from "../containers/ListingList"
import Navbar from "../containers/Navbar"
import Typography from "@material-ui/core/Typography";
import "../style/listitemstyle.css"
import {connect} from "react-redux";

const ListingListTimeLine = props => {

    const {match} = props
    let queryParams = queryString.parse(props.location.search) 

    console.log("before",queryParams)
    
    
    let params = match.params


    console.log("as-dksadf",queryParams,params)

    return(
        <div className ="row">

           
          
            <Navbar/>
           <div className="list"> 
            <Typography variant="title" >
              Category: {params.category} {params.subcategory?"> "+params.subcategory:<div/>}
            </Typography>
            
            <ListingList queryParameters={queryParams}params={params}{...props}/> 

            </div>
            
        
          
            
        </div>
    )
}




export default ListingListTimeLine

