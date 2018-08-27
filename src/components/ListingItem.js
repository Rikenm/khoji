import React from "react"

import {Link} from "react-router-dom";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import "../style/listitemstyle.css"


const ListingItem = ({date,id,username,title,location,city,state}) => {

    //fetch


    const statevalue = state !== ""?state+", ":""


    return(
        <ListItem className="List"  className="row">


        <div className="col-md-1">{date} </div>


        <ListItemText className="col-md-10"
          secondary={city+", "+statevalue+location}
        >
        <div className="list-title">
              <Link  to= {`/post/${id}`} > {title} </Link>
          </div>
        </ListItemText>


        <ListItemSecondaryAction  className="ListItemSecondaryAction">
          <div className="col-md" className="encapsule">
            <h6 className="save-button">Save</h6>
            <h6 className="delete-button">Hide</h6>
          </div>
        </ListItemSecondaryAction>

      </ListItem>

    )
}


export default ListingItem;
