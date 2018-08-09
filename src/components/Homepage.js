import React from "react";
import Navbar from "../containers/Navbar";

import {CategoryList} from "../containers/category"





const Homepage = (props) => {
  
  
  const {currentUser,whichState} = props

  console.log("propsofHomepage", props)


  
 
  

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
                       <div className="stateandtable">
                        <h5 className="stateSelected">You are currently checking listings at: {localStorage.getItem("first_visit")?localStorage.getItem("first_visit"):"N/A"}</h5>
                        <CategoryList {...props}/>
                      </div>
                        </div>       
)



}else if (localStorage.getItem("first_visit") !== null) {
  //...
  return(
    <div>
     <Navbar notLoggedIn /> 
 


       <div className="stateandtable">
     <h5 className="stateSelected">You are currently checking listings at: {localStorage.getItem("first_visit")?localStorage.getItem("first_visit"):"N/A"}</h5>
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