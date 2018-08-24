import React from "react"
import queryString from  'query-string';
import ListingList from "../containers/ListingList"
import Navbar from "../containers/Navbar"
import MenuItem from "@material-ui/core/MenuItem";
import "../style/listitemstyle.css"
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

const ListingListTimeLine = (props) => {

    const {match} = props
    let queryParams = queryString.parse(props.location.search)

    let params = match.params

    return(
        <div className ="listing-page">

   
          
            {/* <Navbar/>  */}
            <FormControl required  color="secondary">
              <InputLabel htmlFor="age-simple">Category</InputLabel>
              <Select color="secondary"
                
                name="category"
                inputProps={{
                  name: "category",
                  id: "category-simple"
                }}
                
              >
                
                <MenuItem >Hello</MenuItem>
                <MenuItem >Hello2</MenuItem>
                
                )
                
            
                
              

              </Select>
              {/* <FormHelperText>Required</FormHelperText> */}
            </FormControl>

            
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
