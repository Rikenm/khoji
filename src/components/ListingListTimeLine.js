import React from "react"
import querySearch from  'stringquery';
import ListingList from "../containers/ListingList"
import Navbar from "../containers/Navbar"
import ListControl from "../containers/listControl"
import "../style/listitemstyle.css"
import {checkParams} from "../services/validate"




const ListingListTimeLine = (props) =>  {

    
  
    const {match} = props
    let queryParams = querySearch(props.location.search)

    let params = match.params

   

    

    if (! queryParams.location|| ! queryParams.search||! queryParams.secondary){
     props.history.push("/")
     return(<div/>)
    }

    if(!params.subcategory){
      params.subcategory = "All" 
    }
    console.log("current",queryParams.location,queryParams.secondary,queryParams.search,params.category,params.subcategory)
    if(!checkParams(queryParams.location,queryParams.secondary,queryParams.search,params.category,params.subcategory)){
        props.history.push("/")
        return(<div/>)
    }
    
    


    return(
        <div className ="listing-page">

   
          
            <Navbar/> 
           

            
           <div className="list"> 
         
                
                    <div className=" title">
                           
                        
                                    <ListControl queryParameters={queryParams}params={params}{...props} /> 
                                    
                                   
                   </div> 


                    <div className="listing-list">
                        <ListingList queryParameters={queryParams}params={params}{...props} />
                        
                    </div>


            </div>

           



        </div>
    )
 
}




export default ListingListTimeLine
