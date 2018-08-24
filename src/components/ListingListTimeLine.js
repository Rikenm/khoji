import React from "react"
import queryString from  'query-string';
import ListingList from "../containers/ListingList"
import Navbar from "../containers/Navbar"

import "../style/listitemstyle.css"


const ListingListTimeLine = (props) => {

    const {match} = props
    let queryParams = queryString.parse(props.location.search)

    let params = match.params

    return(
        <div className ="listing-page">



            <Navbar/>



           <div className="list">


                    <div className="title">
                            Category:
                            {params.category}
                            {params.subcategory?"> "+
                            params.subcategory
                            :<div/>}
                    </div>


                    <div className="listing-list">
                        <ListingList queryParameters={queryParams}params={params}{...props} />
                    </div>
            </div>




        </div>
    )
}




export default ListingListTimeLine
