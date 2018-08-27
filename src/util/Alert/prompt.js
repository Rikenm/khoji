import React from "react";

import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "../../style/popupstyling.css"
import {STATE_CITY_DICT} from "../constant/statecity"


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

      } else if(this.state.country === "Nepal"){
          
        this.props.onChange(this.state.country,this.state.city?this.state.city:"All");

      } else{

        this.props.onChange(this.state.country,this.state.state?this.state.state:"All");
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

  handleLocationChange = event => {

    if (event.target.value === "Nepal" ){
      this.setState({
        state:"NEP"
      })
    }

    if (event.target.name === "country") {
      this.setState({ [event.target.name]: event.target.value,
                             state:"",
                             city:""

      });
    }else if (event.target.name === "state"){

      this.setState({ [event.target.name]: event.target.value,
        city:""

      })
    }else{
      this.setState({ [event.target.name]: event.target.value})
    }

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
            onChange={this.handleLocationChange}
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

           {
            (typeof (this.state.country) != 'undefined' && this.state.country) ?
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-simple">{this.state.country=="Nepal"?"City":"State"}</InputLabel>
              <Select
                value={(this.state.country=="USA" || this.state.country=="Australia") ? this.state.state: this.state.city}
                onChange={this.handleLocationChange}
                name="age"
                inputProps={{
                  name: (this.state.country=="USA" || this.state.country=="Australia") ? "state": "city" ,
                  id: "age-simple"
                }}
                className={classes.selectEmpty}
              >
               {
                  STATE_CITY_DICT[this.state.country].map((item)=>{
                     return <MenuItem value={item}>{item}</MenuItem>



                })

              }
              </Select>
              
            </FormControl> :<div/>
           }

       
      </div>
    );
  }
}

export default withStyles(styles)(Prompt);
