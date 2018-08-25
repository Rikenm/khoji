import Table from "../util/table/table"
import React from "react";
import {Grid,Row,Col} from 'react-bootstrap'
import '../style/categoryStyling.css';
import {connect} from "react-redux";

export const CategoryList = (props)=>{


    const {whichState} = props

    console.log("whichstat",whichState)

    const clicked = () =>{
       props.history.push("/newpost")

    }

    const table1Data =() =>({

        name: "Community",
        id: "",
        subitems: [{name:"Activities",id:""},{name:"Lost",id:""},{name:"Events",id:""},{name:"Artists",id:""},{name:"Volunteer",id:""}]
    })


    const table2Data =() =>({

        name: "Services",
        subitems: [{name:"Mechanics",id:""},{name:"Tutor",id:""},{name:"Electronic Repair",id:""},{name:"Real Estate",id:""},{name:"Volunteer",id:""}]
    })




    const table3Data =() =>({

        name: "Jobs",
        subitems: [{name:"IT",id:""},{name:"Software Engineering",id:""},{name:"Fast Food",id:""},{name:"Cashier",id:""},{name:"Nanny",id:""},{name:"Waiter",id:""},{name:"Government Jobs",id:""},{name:"Retail",id:""},{name:"Others",id:""}]
    })

    const table4Data =() =>({

        name: "Housing",
        subitems: [{name:"Rent",id:""},{name:"Single Room",id:""},{name:"Double Room",id:""},{name:"Apt",id:""},{name:"Basement",id:""}]
    })

    const table5Data =() =>({

        name: "For sale",
        subitems: [{name:"Electronics",id:""},{name:"Clothing",id:""},{name:"Books",id:""},{name:"Barter",id:""},{name:"Others",id:""}]
    })





    return(

    <div className="fatherTable" >

          <div className="table1">
          <Table whichState={whichState} data={table1Data()}/>
          </div>

          <div className="table2">
          <Table whichState={whichState} data={table2Data()}/>
          </div>

          <div className="table3 ">
          <Table whichState={whichState} data={table3Data()}/>
          </div>



          <div className="table4">
          <Table whichState={whichState} data={table4Data()}/>
          </div>

          <div className="table5">
          <Table whichState={whichState} data={table5Data()}/>
          </div>

          <button type = "button"
          onClick = {clicked}
          className="postButton" style={{fontFamily:"Bungee Inline",fontSize:"15px",backgroundColor:"black"}}>
              Post Your Listing
              </button>


    </div>


    )


}

function mapStateToProps(state){
    return{
        whichState: state.whichState
    }
}

export default connect(mapStateToProps,)(CategoryList)
