import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchListings} from "../store/actions/listing";

class ListingList extends Component{

    componentDidMount(){
        this.props.fetchListings();
    }

    render(){

        const {listings} = this.props
        // let listingList = listings.map(m=>(


        // ))
    }


}

function mapStateToProps(state){
    return{
        listing: state.listing
    }
}

export default connect(mapStateToProps,{fetchListings})(ListingList)
