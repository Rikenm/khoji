import React from "react";
import {Switch, Route,withRouter,Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Homepage from "../components/Homepage";
import AuthForm from "../components/AuthForm";

import {authUser} from "../store/actions/auth";
import {removeError, addError,facebookError,facebookremoveError} from "../store/actions/error";
import {firstState} from "../store/actions/checkFirstTime"
import withAuth from "../HOC/withAuth"
// import {ListingForm} from "../" //where is listing
import  Snackbar from "../util/snackbar/snackbar";
import PostForm from "../components/PostForm";
import ListingListTimeLine from "../components/ListingListTimeLine"
import  PostPage from "../components/postPage"
import {NotFound} from "../components/NotFound"



// routing logic
const Main = props => {

    
    const {authUser,errors, removeError, currentUser,whichState,firstState,facebookError,post} = props

    console.log("main's error",errors)
    console.log("main's props",props)

    
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
                    <div>
                   {currentUser.isAuthenticated == false ? <AuthForm 
                    errors ={errors}
                    removeError = {removeError}
                    addError = {facebookError}
                    facebookremoveError = {facebookremoveError}
                    onAuth = {authUser} buttonText="Sign up" heading="join khoji"{...props} signUp

                 
                    
                    /> : <Redirect to='/' />
                   }
                     <div> { 
                       
                       errors.message !== null? <Snackbar message= {errors.message}  />:<div/>

                       
                
                    }</div>
                    
                    </div>
                 }
            />

            <Route exact path="/login" 
                render= { props => 
                      <div>
                          {currentUser.isAuthenticated == false ? 
                       <AuthForm 
                       errors ={errors}
                       removeError = {removeError}
                       addError = {facebookError}
                       facebookremoveError = {facebookremoveError}
                       onAuth = {authUser} buttonText="Log in" heading="Welcome Back"{...props}/>
                       : <Redirect to='/' />
                   }     

                       <div> 
                       
                       
                       { 
                       
                       errors.message !== null? <Snackbar message= {errors.message}  />:<div/>

                    }</div>
                       </div>
                 }
            />

            {/* <Route exact path ="/createlisting" component={ListingForm} */}
            
            />
          
            <Route exact path="/newPost"
               
            // need Auth HOC

        //     component = { withAuth(PostForm) }
        //    ---------
            // render = { props => {
            //     const MyComponent = withAuth(PostForm)
            //     return (<MyComponent {...props}></MyComponent>)
            //      }


            // }
            //--------

            // render = { props => {
                
            //     return (<PostForm {...props}></PostForm>)
            //      }


            // }

           
            render = { props => 

                <div>
                {currentUser.isAuthenticated == true ? 

                    <PostForm {...props}/>  :  <Redirect to='/login' />

                }
                </div>

            }

            

           
             />


             <Route exact path ="/listing/:category/:subcategory?"  {...props}  component={ListingListTimeLine}/>

             <Route exact path = "/post/:postid" {...post} component={PostPage}/>





             <Route  component={NotFound} />

           

            
    </Switch>

    

   

   
)

}
function mapStateToProps(state){

   
   

    
    return{
        currentUser: state.currentUser,
        errors: state.errors,
        whichState: state.firstStateReducer.whichState,
      
       
    }
}

// const mapDispatchToProps = dispatch => (
//     {
//         firstState: (whichState) => dispatch(firstState(whichState)),
//         removeError:() => dispatch(removeError()),
//         authUser: (type,userData) => dispatch(authUser(type,userData))
//     }
    
// )








export default withRouter(connect(mapStateToProps,{firstState,removeError,authUser,facebookError,facebookremoveError})(Main))