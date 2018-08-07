import React, {Component} from "react";
import PropTypes from "prop-types";

import Snackbar from "@material-ui/core/Snackbar";
import { withStyles } from "@material-ui/core/styles";
import {MySnackbarContentWrapper} from "./snackbarContent"


//derived from material-ui react library 
// link : https://codesandbox.io/s/qxjoprzw0j


const styles2 = theme => ({
    margin: {
      margin: theme.spacing.unit
    }
  });
  
  class CustomizedSnackbars extends Component {

    constructor(props){
        super(props); 
        this.state = { open: true };

    }

    state = {
      open: false
    };

   componentWillReceiveProps(nextProps){

    this.setState({
      open: true
    })

    
   }
    
    

    
  
    
  
    handleClose = (event, reason) => {
      if (reason === "clickaway") {
        return;
      }
  
      this.setState({ open: false });
    };
  
    render() {
      const { classes } = this.props;
  
      return (
        <div>
          
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left"
            }}
            open={this.state.open}
            autoHideDuration={6000}
            onClose={this.handleClose}
          >  
            {/* <MySnackbarContentWrapper
              onClose={this.handleClose}
              variant="success"
              message="This is a success message!"
            /> */}
             <MySnackbarContentWrapper
            onClose={this.handleClose}
            variant="error"
            className={classes.margin}
            message= {this.props.message}
          />

          </Snackbar>
          
          
        </div>
      );
    }
  }
  
  CustomizedSnackbars.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
  export default withStyles(styles2)(CustomizedSnackbars);
  