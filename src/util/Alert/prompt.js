import React from "react";

import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import {USA_STATE_LIST} from "../constant/statecity"
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "../../style/popupstyling.css"


/** The prompt content component */
const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 300
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

class Prompt extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.defaultValue,
      country:'USA',
      state: 'All',
      city:'All'
    };

    this.onChange = e => this._onChange(e);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      
     if (this.state.country === "USA") {
    
      this.props.onChange(this.state.country?this.state.country:"USA",this.state.state?this.state.state:"All");

      } else {
          
        this.props.onChange(this.state.country,this.state.city?this.state.city:"All");

      } 


    }
  }

  _onChange(e) {
    let value = e.target.value;

    this.setState({ value: value });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };


  render() {
    const { classes } = this.props;
    return (
      <div>
        {
          // <input
          //   type="text"
          //   placeholder={this.props.placeholder}
          //   className="mm-popup__input"
          //   value={this.state.value}
          //   onChange={this.onChange}
          // />
        }

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-required">Country</InputLabel>
          <Select
            value={this.state.country}
            onChange={this.handleChange}
            inputProps={{
              name: "country",
              id: "country-simple"
            }}
          >

         

            <MenuItem value="USA">USA</MenuItem>

          
             
             <MenuItem value="Australia">Australia</MenuItem>
            <MenuItem value="Nepal">Nepal</MenuItem>
           
            
          </Select>
        </FormControl>

       { (this.state.country === "USA")?<FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-required">State</InputLabel>
          <Select
            value={this.state.state}
            onChange={this.handleChange}
            inputProps={{
              name: "state",
              id: "state-required"
            }}
          >
            <MenuItem value="All">
              <em>All</em>
            </MenuItem>

             {USA_STATE_LIST.map((state)=>(
               <MenuItem key={state} value={state}>{state}</MenuItem>

             ))}
            
            
          </Select>
        </FormControl>: <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-simple">City</InputLabel>
          <Select
            value={19}
            inputProps={{
              name: "age",
              id: "age-simple"
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        }

       
      </div>
    );
  }
}

export default withStyles(styles)(Prompt);
