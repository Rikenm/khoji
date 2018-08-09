import React,{Component} from "react"
import Navbar from "../containers/Navbar";
import "../style/postform.css"
import {newPost} from "../store/actions/listing"
import {connect} from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";


const styles = theme => ({
    root: {
      display: "flex",
      flexWrap: "wrap"
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 220
    },
    selectEmpty: {
      marginTop: theme.spacing.unit * 2
    }
  });



class PostForm extends Component{

    constructor(props){
            super(props)
            this.state = {
                Country: "world"
            }


    }

    state = {
        age: "",
        name: "hai"
      };
    
      handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      };
    
     handleNewPost = event => {

        event.preventDefault();


     }   


    render(){
        const { classes } = this.props;

          return(<div>

              
              <Navbar/>
              <div className="newpostform">
              <form className={classes.root} autoComplete="off">


        Select category:
        <FormControl className={classes.formControl}>
          <Select
            value={this.state.age}
            onChange={this.handleChange}
            displayEmpty
            name="age"
            inputProps={{
              id: "age-required"
            }}
            className={classes.selectEmpty}
          >
            <MenuItem value="">
              All
            </MenuItem>
            <MenuItem value="MA">Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>
        
      </form>
              


              </div>   



                </div>)  

    }


}

function mapStateToProps(state){
  return {
      errors: state.errors
  }

}

export default withStyles(styles)(connect(mapStateToProps,{newPost})(PostForm))