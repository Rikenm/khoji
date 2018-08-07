import React from "react";
import {Switch, Route,withRouter,Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Homepage from "../components/Homepage";
import AuthForm from "../components/AuthForm";
import Navbar from "./Navbar"
import {authUser} from "../store/actions/auth";
import {removeError} from "../store/actions/error";
import {firstState} from "../store/actions/checkFirstTime"
import withAuth from "../HOC/withAuth"
// import {ListingForm} from "../" //where is listing


// routing logic
const Main = props => {
    const {authUser,errors, removeError, currentUser,whichState,firstState} = props

    
return(
    // <div className = "container">
     <Switch>
            <Route exact path="/" 
                render= { props => 
                     <div>
                      
                       <Homepage 
                      firstState = {firstState}
                       whichState = {whichState}
                       currentUser= {currentUser}
                       {...props}/>
                       </div>
                 }
            />
            <Route exact path="/signup" 
                render= { props => 
                    <AuthForm 
                    errors ={errors}
                    removeError = {removeError}
                    onAuth = {authUser} buttonText="Sign up" heading="join khoji"{...props} signUp/>
                 }
            />

            <Route exact path="/login" 
                render= { props => 
                       <AuthForm 
                       errors ={errors}
                       removeError = {removeError}
                       onAuth = {authUser} buttonText="Log in" heading="Welcome Back"{...props}/>
                 }
            />

            {/* <Route exact path ="/createlisting" component={ListingForm} */}
            
            />

            
    </Switch>

   
)

}
function mapStateToProps(state){

   
   

    console.log(state)
    return{
        currentUser: state.currentUser,
        errors: state.errors,
        whichState: state.firstStateReducer.whichState
    }
}

// const mapDispatchToProps = dispatch => (
//     {
//         firstState: (whichState) => dispatch(firstState(whichState)),
//         removeError:() => dispatch(removeError()),
//         authUser: (type,userData) => dispatch(authUser(type,userData))
//     }
    
// )








export default withRouter(connect(mapStateToProps,{firstState,removeError,authUser})(Main))