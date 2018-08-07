import React from "react";

import {Link} from "react-router-dom";
import Navbar from "../containers/Navbar";
import Hidden from "@material-ui/core/Hidden";
import {firstState} from "../store/actions/checkFirstTime"




const Homepage = (props) => {
  
  
  const {currentUser,whichState} = props

  console.log("propsofHomepage", props)


  
 
  

  const stateButtonClicked = () => {
    // if state is clicked

       
       props.firstState("MA")// need to insert the data
       props.history.push("/")
      


  }  

const clicked = () =>{

        console.log("clicked")
}        

if (currentUser.isAuthenticated){
     // authtenticated

    
return(     
                <div >
                       <Navbar /> 
                        <h6>You are currently checking listings at: {localStorage.getItem("first_visit")?localStorage.getItem("first_visit"):"N/A"}
                           

                        </h6>

                        <h5>{currentUser.user.name}</h5> 
                        
                        
                        </div>       
)



}else if (localStorage.getItem("first_visit") !== null) {
  //...
  return(
    <div>
     <Navbar notLoggedIn /> 
     
    </div>
  )

}
else{
return(
        <div className="formbackground">
       <div className="firstCard">

        
       
           <h1 className="stateheading"> State </h1>
          
           <input className="stateinput" type="text"/> <br/>
           
            <button onClick={stateButtonClicked}  className="stateButton">Go</button>
          
            <br />
          <div className="footnotes">      
            Free listing <br/>
           <div className="clickableDiv"onClick={clicked}> Login Required</div><br/>
           </div>
            
        
          
       
       
      </div>
</div>  )

        // return(
        //         <div>
        //                 <Navbar/>
        //                 Already Logged in</div>
        // )

}



}

export default Homepage ;