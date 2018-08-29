import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchListings} from "../store/actions/listing";
import ListingItem from "../components/ListingItem"
import List from "@material-ui/core/List";
import "../style/listitemstyle.css"
import {checkParams} from "../services/validate"
import {removeError, addError} from "../store/actions/error";


class ListingList extends Component{
   


    
   
    componentDidMount(){
        console.log("Mounted")
        const {queryParameters,params} = this.props
        
        
      
            this.props.fetchListings(queryParameters.location,queryParameters.secondary,queryParameters.search,params.category,params.subcategory);  //uncomment later
       
       


   

         
    }

    componentDidUpdate(prevProps){

        if(this.props.queryParameters.location === prevProps.queryParameters.location && this.props.queryParameters.search === prevProps.queryParameters.search && this.props.queryParameters.secondary === prevProps.queryParameters.secondary && this.props.params.category === prevProps.params.category &&  this.props.params.subcategory === prevProps.params.subcategory  && this.props.listings !== prevProps.listings){
            console.log("just updating here",this.props,prevProps)
           
            
        }else {

            

   
        console.log("calling")
        

        const {queryParameters,params} = this.props
       
          
        this.props.fetchListings(queryParameters.location,queryParameters.secondary,queryParameters.search,params.category,params.subcategory);  //uncomment later

        
   
    }

    }

    shouldComponentUpdate(nextProps,nextState){

        if(this.props.queryParameters.location === nextProps.queryParameters.location && this.props.queryParameters.search === nextProps.queryParameters.search && this.props.queryParameters.secondary === nextProps.queryParameters.secondary && this.props.params.category === nextProps.params.category &&  this.props.params.subcategory === nextProps.params.subcategory  && this.props.listings !== nextProps.listings){
            console.log("ok to update but no call api",this.props,nextProps)
            return true
        }
        
       
        if(this.props.queryParameters.location !== nextProps.queryParameters.location|| this.props.queryParameters.search !== nextProps.queryParameters.search|| this.props.queryParameters.secondary !== nextProps.queryParameters.secondary ||  this.props.params.category !== nextProps.params.category ||  this.props.params.subcategory !== nextProps.params.subcategory){
            console.log("ok to call api as at least one thing is not same",this.props,nextProps)
            return true
        }
        console.log("not ok to call api as evertyhing is same",this.props,nextProps)
        return false
        
    }

    NextClick= (e) =>{

        const {queryParameters,params,addError} = this.props

        if ((params.subcategory) === "All"){

            this.props.history.push({
                pathname: `/listing/${params.category}`,
                search: `?location=${queryParameters.location}&secondary=${queryParameters.secondary}&search=${parseInt(queryParameters.search)+1}`
            })


        }else{
        this.props.history.push({
            pathname: `/listing/${params.category}/${params.subcategory}`,
            search: `?location=${queryParameters.location}&secondary=${queryParameters.secondary}&search=${parseInt(queryParameters.search)+1}`
        })
    }


       
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



          

                     
                var listingList = (listings.length !== 0 )?

                  
                    
                     
                    listingList = listings[0].data.map(m=>{



                        return ( <div>
                            <ListingItem  key ={m.id} id={m.id} date={getDate(m.date)} title={m.title} location={m.country} city={m.city}  state={m.state}username="Riken"/>
                            
            
                            </div>)
                    })

                
                    :listingList = <div>No result </div>
                  
                   


        return (
        <List dense={false} className="List">
          
          
          {listingList}
          <br/>
          {(listings.length !== 0)  ? <button
                            disabled = {listings.length !== 21 }
                            onClick={this.NextClick}
          >Next</button> :<div/>}
                        
         </List>
        )
    }
   


}

function mapStateToProps(state){
    return{
        listings: state.list,
        whichState: state.firstStateReducer.whichState,
    }
}

export default connect(mapStateToProps,{fetchListings,addError})(ListingList)
