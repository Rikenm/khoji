import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchListings} from "../store/actions/listing";
import ListingItem from "../components/ListingItem"
import List from "@material-ui/core/List";
import "../style/listitemstyle.css"



class ListingList extends Component{
   
    componentDidMount(){
        const {queryParameters,params} = this.props
        if (!queryParameters.location|| ! queryParameters.search||! queryParameters.secondary){
              this.props.history.push("/")
        }else{

          
        this.props.fetchListings(queryParameters.location,queryParameters.secondary,queryParameters.search,params.category,params.subcategory);  //uncomment later


        // console.log(this.props.params)
         }

         
    }

    componentWillUnmount(){
       console.log("unmount")
    }
    render(){
         const {listings} = this.props
         const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
         'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
 
             const  getDate = (date) => {
                 var d = new Date(date)
                 var date = d.getDate()
                 var months = month[d.getMonth()]
                 return (months+" "+date)
             }  



            console.log("listing",listings)

                     
                var listingList = (listings.length != 0 )?

                  
                    
                     
                    listingList = listings[0].data.map(m=>{



                        return  <ListingItem  key ={m.id} id={m.id} date={getDate(m.date)} title={m.title} location={m.country} username="Riken"/>
                    })

                
                    :listingList = <div>No results </div>
                  
                   


        return (
        <List dense={false} className="List">
          
          
          {listingList}
            
         </List>
        )
    }
   


}

function mapStateToProps(state){
    return{
        listings: state.list,
        whichState: state.firstStateReducer.whichState,
        errors: state.errors
    }
}

export default connect(mapStateToProps,{fetchListings})(ListingList)
