import Table from "../util/table/table"
import React from "react";
import '../style/categoryStyling.css';

export const CategoryList = (props)=>{

    const clicked = () =>{
       props.history.push("/newpost")

    }

    const table1Data =() =>({

        name: "Community",
        subitems: ["Activities","Lost","Events","Artists","Volunteer"]
    })


    const table2Data =() =>({

        name: "Services",
        subitems: ["Mechanics","Tutor","Electronic Repair","Real Estate","Volunteer"]
    })




    const table3Data =() =>({

        name: "Jobs",
        subitems: ["IT","Software Engineering","Fast Food","Cashier","Nanny","Waiter","Government Jobs","Retail","Others"]
    })

    const table4Data =() =>({

        name: "Housing",
        subitems: ["Rent","Single Room","Double Room","Apt","Basement"]
    })

    const table5Data =() =>({

        name: "For sale",
        subitems: ["Electronics","Clothing","Books","Barter","Others"]
    })





    return(

    <div className="fatherTable">   

      
    <div className="table1">   
    <Table data={table1Data()}/>
    </div>

    <div className="table2">
    <Table data={table2Data()}/>
    </div>

    <div className="table3">
    <Table data={table3Data()}/>
    </div>

    <div className="table4">
    <Table data={table4Data()}/>
    </div>

    <div className="table5">
    <Table data={table2Data()}/>
    </div>

    <button type = "button"
    onClick = {clicked}
    
    className="postButton">

        Post Your Listing
        </button>

    

    </div>

    )


}
