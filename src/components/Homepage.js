import React from "react";
import Navbar from "../containers/Navbar";
import Popup from "react-popup";

import "../style/popupstyling.css"
import {CategoryList} from "../containers/category"
import Alertregister from "../util/Alert/popuregister"


const clicked2 = () => {

  
  Popup.plugins().prompt("", "Type your name", function(value) {
    Popup.alert("You typed: " + value);
  });

};


const Homepage = (props) => {

  Alertregister()

  const {currentUser,whichState} = props
  const stateButtonClicked = () => {
    // if state is clicked

       
       props.firstState("MA")// need to insert the data
       props.history.push("/")
      


  }  

const clicked = () =>{

  props.history.push("/login")
}        

if (currentUser.isAuthenticated){
     // authtenticated

    
return(    
  
  
                <div >
                 
                       <Navbar /> 
                       <Popup />
                       <div className="stateandtable">
                        <div className="stateSelected">
                        <div className="block1">You are currently checking listings at: </div> 
                        <div className="block2" onClick={clicked2}>{localStorage.getItem("first_visit")?localStorage.getItem("first_visit"):"N/A"}</div>
                        </div>
                        <CategoryList {...props}/>
                      </div>
                        </div>       
)



}else if (localStorage.getItem("first_visit") !== null) {
  //...
  return(
    <div>
       
     <Navbar  /> 
     <Popup />
 


       <div className="stateandtable">
       <h5 className="stateSelected">You are currently checking listings at:</h5> <div className="state-selected"onClick={clicked2}>{localStorage.getItem("first_visit")?localStorage.getItem("first_visit"):"N/A"}</div>
     <CategoryList {...props}/>
     </div>
     
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