import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import  Snackbar from "../util/snackbar/snackbar";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Navbar from "../containers/Navbar"
import "../style/postform.css"
import Preview from "../containers/preview";
import {connect} from "react-redux";
import {Category_LIST,Sub_Category_LIST} from "../util/constant/categorylist";
import {STATE_CITY_DICT} from "../util/constant/statecity"
import {newPost} from "../store/actions/post"
import TextField from "@material-ui/core/TextField";
import {logout} from "../store/actions/auth"

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
   
  },

  formControl: {
    margin: theme.spacing.unit,
    minWidth: 200,
   
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
    
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
    
  }
});

function getSteps() {
  return [
    "Select Category",
    "Select Your Location",
    "Create Your Listing",
    "Contacts"
  ];
}



class VerticalLinearStepper extends React.Component {
 
 
  constructor(props){
    super(props)

  this.state = {
    activeStep: 0,
    category: "",
    subcategory: "",
    country: "",
    state: "",
    city: "",
    description: "",
    title: "",
    contact: "",
    name: ""
  };

}




  componentDidMount(){
 

  if (typeof localStorage.getItem("userInfo") !== undefined && localStorage.getItem("userInfo")){
    this.setState({ name: JSON.parse(localStorage.getItem("userInfo")).name
      })
    }
}



componentWillUnmount(){
  console.log("about to unmount")
}

// shouldComponentUpdate(nextProps){
//    return false
// }

 

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
                             state: "",
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


  getStepContent = (step, classes) =>  {
    switch (step) {
      case 0:
        return (
          <div>
          
            <FormControl required className={classes.formControl} color="secondary">
              <InputLabel htmlFor="age-simple">Category</InputLabel>
              <Select color="secondary"
                value={this.state.category}
                onChange={this.handleChange}
                name="category"
                inputProps={{
                  name: "category",
                  id: "category-simple"
                }}
                className={classes.selectEmpty}
              >
                
                {Category_LIST.map((item,id) => {

                  return (<MenuItem key = {id} value={item}>{item}</MenuItem>)
                
                })
                
              }

              </Select>
              <FormHelperText>Required</FormHelperText>
            </FormControl>
            <br />
            {
            (typeof (this.state.category) != 'undefined' && this.state.category) ?
            <FormControl required className={classes.formControl}>
              <InputLabel htmlFor="age-simple">Sub-Category</InputLabel>
              <Select
                value={this.state.subcategory}
                onChange={this.handleChange}
                name="subcategory"
                inputProps={{
                  name: "subcategory",
                  id: "subCategory-simple"
                }}
                className={classes.selectEmpty}
              >
                {
                   
                          Sub_Category_LIST[this.state.category].subitems.map((item,id) => {

                                return (<MenuItem key = {id} value={item.name}>{item.name}</MenuItem>)

                        }) 
                   

                }
              </Select>
              <FormHelperText>Required</FormHelperText>
            </FormControl> : <div/>
          }
          </div>
        );
      case 1:
        return (
          <div>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-simple">Country</InputLabel>
              <Select
                value={this.state.country}
                onChange={this.handleLocationChange}
                name="country"
                inputProps={{
                  name: "country",
                  id: "country-simple"
                }}
                className={classes.selectEmpty}
              >
                
                <MenuItem value="USA">USA</MenuItem>
                <MenuItem value="Australia">Australia</MenuItem>
                <MenuItem value="Nepal">Nepal</MenuItem>
              </Select>
              <FormHelperText>Required</FormHelperText>
            </FormControl>
           <br/>
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
              <FormHelperText>Required</FormHelperText>
            </FormControl> :<div/>
           }
            <br/>

          {this.state.country == "USA" || this.state.country == "Australia"?  
          <div>
          <TextField 
          label="City"
          name = "city"
          value = {this.state.city} 
          onChange={this.handleLocationChange}
          style={{width:220,  marginLeft: '+10px'}}
       
          
          />
         <FormHelperText style={{  marginLeft: '+10px'}}> Required</FormHelperText>
          </div>
          
           : <div/>}

            
          </div>

            
          
        );
      case 2:
        return (
          <div>
            <TextField 
            label="Title"
            name = "title"
            value = {this.state.title} 
            onChange={this.handleChange}
            style={{paddingBottom:20, width:400}}
            />
            <br/>
            <textarea
              placeholder="Please type here..."
              name="description"
              value={this.state.description}
              rows="12"
              cols="50"
              onChange={this.handleChange}
            />

            <br />
          </div>
        );
      default:
        return <TextField
        label="Contact"
            name = "contact"
            value = {this.state.contact} 
            onChange={this.handleChange}
        
        />;
    }
  };

  handleNext = (event) => {
    event.preventDefault()
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = (event) => {
    event.preventDefault()
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  

  handleSubmit = (event) => {

    event.preventDefault()

   
    this.props.newPost(this.state).then((id) =>{
      
       

       this.setState({
        activeStep: 0,
        category: "",
        subCategory: "",
        country: "",
        state: "",
        city: "",
        description: "",
        title: "",
        contact: "",
        name: ""
      })
      
      

      this.props.history.push(`/post/${id}`)


    })
    .catch((err)=>{
      console.log("hello in postform err catch",err.message)
    try{  
      if (err.message === "401"){
          
         this.props.logout()
          this.props.history.push("/login")
      }
      else{
        return 
      }
    }catch(ex){

      return
    }

       
       
    })



  }

  render() {
    const { classes,errors } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;


    return (
      <div className={classes.root}>
        <Navbar/>
        <div className="container">
        {/* <p id="p_wrap">{this.state.value}</p> */}

        <Preview post={this.state} />
      <form onSubmit = {this.handleSubmit}>
        <Stepper activeStep={activeStep} orientation="vertical" color="secondary" className="stepper">
          {steps.map((label, index) => {
            return (

              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <div>{this.getStepContent(index, classes)}</div>
                  <br />
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                      {activeStep === steps.length - 1 ? <Button
                       type="submit"
                        variant="contained"
                        color="primary"
                        
                        className={classes.button}
                      > Submit
                        {/* {activeStep === steps.length - 1 ? "Submit" : "Next"} */}
                      </Button> : 
                      
                     <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}
                        className={classes.button}
                      > Next
                      
                      </Button> }
                    </div>
                  </div>
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
        </form>
        </div>
        
        <div> {  //error
                       
                       errors.message !== null? <Snackbar message= {errors.message}  />:<div/>

                       
                
                    }</div>

      </div>
   
      
    );
  }
}

VerticalLinearStepper.propTypes = {
  classes: PropTypes.object
};

function mapStateToProps(state){

  return {
    errors: state.errors
  }
}

export default connect(mapStateToProps,{newPost,logout})(withStyles(styles)(VerticalLinearStepper));
