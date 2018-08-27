import React from "react";
import Navbar from "../containers/Navbar";
import Popup from "react-popup";

import "../style/popupstyling.css"
import {CategoryList} from "../containers/category"
import Alertregister from "../util/Alert/popuregister"

const Homepage = (props) => {

  Alertregister()
  console.log("Alert regiestered")

  const {currentUser} = props
  // const stateButtonClicked = () => {
  //     // if state is clicked


  //       props.firstState("MA")// need to insert the data
  //       props.history.push("/")



  //   }


  // const clicked = () =>{
  //   // console.log("hi")
  //   // props.history.push("/login")
  // }


  //pop up
  const clicked2 = () => {


      Popup.plugins().prompt("", "Type your name", function(country,state) {

        console.log("country-state",country,state)

      //all right except when no update
      if (country == null){
        country = "USA"
        state = "All"
      }

      props.firstState({country:country,state:state})//state+", "+country)

        // dispatch location from here

      });

};

//end popup

if (currentUser.isAuthenticated){
     // authtenticated




      const first_visit = localStorage.getItem("first_visit")

return(


                <div >


                       <Popup />
                       <Navbar />

                       <div className="stateandtable">
                        <div className="stateSelected" style={{fontFamily:'Bungee Inline',fontSize:"15px"}}>
                        <div className="block1" >You are currently checking listings at :  </div>
                        <div className="block2" onClick={clicked2}>
                        {first_visit?
                        JSON.parse(first_visit).country !== "World"?
                          JSON.parse(first_visit).state+", "+JSON.parse(first_visit).country: "World"

                          :"World"}

                        </div>
                        </div>
                        <CategoryList {...props}/>
                      </div>
                        </div>
)



}else{

const first_visit = localStorage.getItem("first_visit")

return(
  <div>
    <Popup />
   <Navbar  />


     <div className="stateandtable">
                        <div className="stateSelected" style={{fontFamily:'Bungee Inline',fontSize:"15px"}}>
                        <div className="block1">You are currently checking listings at: </div>
                        <div className="block2" onClick={clicked2}>{first_visit?
                        JSON.parse(first_visit).country !== "World"?
                          JSON.parse(first_visit).state+", "+JSON.parse(first_visit).country: "World"

                          :"World"}</div>
                        </div>
   <CategoryList {...props}/>
   </div>

  </div>
)

}
// else{
// return(
//         <div className="formbackground">
//        <div className="firstCard">



//            <h1 className="stateheading"> State </h1>

//            <input className="stateinput" type="text"/> <br/>

//             <button onClick={stateButtonClicked}  className="stateButton">Go</button>

//             <br />
//           <div className="footnotes">
//             Free listing <br/>
//            <div className="clickableDiv"onClick={clicked}> Login Required</div><br/>
//            </div>





//       </div>
// </div>  )

//         // return(
//         //         <div>
//         //                 <Navbar/>
//         //                 Already Logged in</div>
//         // )

// }



}

export default Homepage ;
