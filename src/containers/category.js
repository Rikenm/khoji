import Table from "../util/table/table"
import React from "react";
import '../style/categoryStyling.css';

export const CategoryList = (props)=>{

    const clicked = () =>{
       props.history.push("/newpost")

    }


    return(

    <div className="fatherTable">   

      
    <div className="table1">   
    <Table />
    </div>

    <div className="table2">
    <Table />
    </div>

    <div className="table3">
    <Table />
    </div>

    <div className="table4">
    <Table />
    </div>

    <div className="table5">
    <Table />
    </div>

    <button type = "button"
    onClick = {clicked}
    
    className="postButton">

        Post Your Listing
        </button>

    

    </div>

    )


}
