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
        const listings = [{timeAgo:"0 days"
                           ,
                        id: 0,
                        username: "Rikenm",
                        title: "IT Job",
                        body:  "",
                        location: "Revere,MA",
                        },
                        {timeAgo:"1 days"
                        ,
                     id: 1,
                     username: "Biken",
                     title: "Cashier",
                     body:  "",
                     location: "Revere,MA"
                     },
                       {timeAgo:"2 days"
                           ,
                        id: 2,
                        username: "Rikenm",
                        title: "Marketing",
                        body:  "",
                        location: "Revere,MA"
                        }
                    
                    
                    ]

                    let listingList = listings.map(m =>{
                       
                        <ListingItem key={m.id} date={m.timeAgo} text={m.body} username={m.username}  title={m.title} location={m.location} />
        
        
                    })  
                    
                    console.log(listingList,"printing-====")


        return (
        <List dense={false} className="List">
          
          <ListingItem key={0} date={"1 day"} text={""} username={"Rikenm"}  title={"IT Job"} location={"Revere, MA"} className="List"/>
          <ListingItem key={1} date={"1 day"} text={""} username={"Rikenm"}  title={"IT Job"} location={"Revere, MA"}/>
          <ListingItem key={2} date={"1 day"} text={""} username={"Rikenm"}  title={"IT Job"} location={"Revere, MA"}/>
          <ListingItem key={3} date={"1 day"} text={""} username={"Rikenm"}  title={"IT Job"} location={"Revere, MA"}/>
          <ListingItem key={4} date={"1 day"} text={""} username={"Rikenm"}  title={"IT Job"} location={"Revere, MA"}/>
            
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
