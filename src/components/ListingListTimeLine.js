import React from "react"
import queryString from  'query-string';
import ListingList from "../containers/ListingList"
import Navbar from "../containers/Navbar"
import ListControl from "../containers/listControl"
import "../style/listitemstyle.css"



const ListingListTimeLine = (props) =>  {

    
  
    const {match} = props
    let queryParams = queryString.parse(props.location.search)

    let params = match.params

    

    if (! queryParams.location|| ! queryParams.search||! queryParams.secondary){
     props.history.push("/")
     return(<div/>)
    }

    if(!params.subcategory){
      params.subcategory = "All" 
    }
    


    return(
        <div className ="listing-page">

   
          
            <Navbar/> 
           

            
           <div className="list"> 
         
                
                    <div className="title">
                            {/* Select:  */}
                            <ListControl queryParameters={queryParams}params={params}{...props}/> 
                            
                            {/* {params.category} */}
                            
                            {/* {params.subcategory?"> "+
                            params.subcategory
                            
                            :<div/>} */}
                    </div>


                    <div className="listing-list">
                        <ListingList queryParameters={queryParams}params={params}{...props} />
                    </div>
            </div>




        </div>
    )
 
}




export default ListingListTimeLine
