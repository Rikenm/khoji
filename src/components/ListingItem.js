import React from "react"

import {Link} from "react-router-dom";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import "../style/listitemstyle.css"


const ListingItem = (date,id,username,title,location) => {

    id =1112

    return(
        <ListItem className="List">
        <div>Jul 4 </div>
        <ListItemText
         
           
          secondary={true ? "Somerville, Ma" : null}
        >
        <span >
              <Link to= {`/post/${id}`} > "Software Engineering" </Link>
          </span>

        </ListItemText>
        <ListItemSecondaryAction className="ListItemSecondaryAction">
          <div className="encapsule">
            <h6 className="save-button">Save</h6>
            <h6 className="delete-button">Hide</h6>
          </div>
        </ListItemSecondaryAction>
      </ListItem>
        
    )
}


export default ListingItem;