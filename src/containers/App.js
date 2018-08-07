import React, { Component } from 'react';
import {Provider} from "react-redux";
import {configureStore} from "../store";
import {BrowserRouter as Router} from "react-router-dom"
import Navbar from "./Navbar"
import Main from "./main"
import { setAuthorizationToken, setCurrentUser } from '../store/actions/auth';
// import jwtDecode from "jwt-decode";



const store = configureStore()

if(localStorage.accessToken && localStorage.refreshToken && localStorage.userInfo){
  setAuthorizationToken(localStorage.accessToken)
  //
  try{

      const user = JSON.parse(localStorage.getItem("userInfo"));

      store.dispatch(setCurrentUser(user))
  }catch(e){

    console.log(e)
    store.dispatch(setCurrentUser({}))
  }
}


const App = () =>{
 
  return (

    <Provider store={store}>
     <Router>
    
        <div className="onBoarding"> 
           
            <Main/>
            
        </div>
     </Router>
    </Provider>
  )

}

export default App;
