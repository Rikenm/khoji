import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchListings} from "../store/actions/listing";
import ListingItem from "../components/ListingItem"
import List from "@material-ui/core/List";
import "../style/listitemstyle.css"

class ListingList extends Component{

    componentDidMount(){
        // this.props.fetchListings();  //uncomment later
    }

    render(){

        // const {listings} = this.props //uncomment later
        const listings = [{timeAgo:"July 5"
                           ,
                        id: 0,
                        username: "Rikenm",
                        title: "IT Job",
                        
                        location: "Revere,MA",
                        },
                        {timeAgo:"July 4"
                        ,
                     id: 1,
                     username: "Biken",
                     title: "Cashier",
                    
                     location: "Revere,MA"
                     },
                       {timeAgo:"July 4"
                           ,
                        id: 2,
                        username: "Rikenm",
                        title: "Marketing",
                       
                        location: "Revere,MA"
                        }
                    
                    
                    ]

                    let listingList = listings.map(m =>{
                       
                        return <ListingItem id = {m.id}key={m.id} date={m.timeAgo}  username={m.username}  title={m.title} location={m.location} />
        
        
                    })  
                    
                   


        return (
        <List dense={false} className="List">
          
          
          {listingList}
            
         </List>
        )
    }
   


}

function mapStateToProps(state){
    return{
        listing: state.listing
    }
}

export default connect(mapStateToProps,{fetchListings})(ListingList)
