import React, { Component } from 'react';
import {Provider} from "react-redux";
import {configureStore} from "../store";
import { loadReCaptcha } from 'react-recaptcha-google'
import {BrowserRouter as Router} from "react-router-dom"

import Main from "./main"
import { setAuthorizationToken, setCurrentUser } from '../store/actions/auth';
// import jwtDecode from "jwt-decode";

import {firstState} from "../store/actions/checkFirstTime"

const store = configureStore()

localStorage.setItem("first_visit",JSON.stringify({country:"USA",state:"All"}))

if(localStorage.accessToken && localStorage.refreshToken && localStorage.userInfo){
  setAuthorizationToken(localStorage.accessToken)

  

  //
  try{

      const user = JSON.parse(localStorage.getItem("userInfo"));
      console.log("first_visit_firstopen",localStorage.getItem("first_visit"))
      if (localStorage.getItem("first_visit") === null){
           
            localStorage.setItem("first_visit",JSON.stringify({country:"USA",state:"All"}))
      }  
      const whichState = JSON.parse(localStorage.getItem("first_visit"));

      store.dispatch(setCurrentUser(user))
      store.dispatch(firstState(whichState))
  }catch(e){

    console.log(e)
    store.dispatch(setCurrentUser({}))
  }
}else{
  
      if (localStorage.getItem("first_visit") === null){
        localStorage.setItem("first_visit",JSON.stringify({country:"USA",state:"All"}))
            store.dispatch(firstState({country:"USA",state:"All"}))
      }else{
        const whichState = JSON.parse(localStorage.getItem("first_visit"));
        store.dispatch(firstState(whichState))
      } 

}


class App extends Component{


  componentDidMount(){
    loadReCaptcha();

  }
 
  render() {
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

}

export default App;
