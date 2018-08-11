import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Navbar from "../containers/Navbar"
import purple from '@material-ui/core/colors/purple';

import "../style/postform.css"




import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    backgroundColor: purple[300]
  },

  formControl: {
    margin: theme.spacing.unit,
    minWidth: 200,
    color: purple[300]
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
    color: purple[300]
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
    color: purple[300]
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

const NUMBER_ITEMS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

class VerticalLinearStepper extends React.Component {
  state = {
    activeStep: 0,
    value: ""
  };

  handletextchange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  getStepContent = (step, classes) => {
    switch (step) {
      case 0:
        return (
          <div>
          
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-simple">Category</InputLabel>
              <Select
                value={this.state.age}
                onChange={this.handleChange}
                name="age"
                inputProps={{
                  name: "age",
                  id: "age-simple"
                }}
                className={classes.selectEmpty}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="MA">Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              <FormHelperText>Required</FormHelperText>
            </FormControl>
            <br />
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-simple">Sub-Category</InputLabel>
              <Select
                value={this.state.age}
                onChange={this.handleChange}
                name="age"
                inputProps={{
                  name: "age",
                  id: "age-simple"
                }}
                className={classes.selectEmpty}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="MA">Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              <FormHelperText>Required</FormHelperText>
            </FormControl>
          </div>
        );
      case 1:
        return (
          <div>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-simple">Country</InputLabel>
              <Select
                value={this.state.age}
                onChange={this.handleChange}
                name="age"
                inputProps={{
                  name: "age",
                  id: "age-simple"
                }}
                className={classes.selectEmpty}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="MA">Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              <FormHelperText>Required</FormHelperText>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-simple">City</InputLabel>
              <Select
                value={this.state.age}
                onChange={this.handleChange}
                name="age"
                inputProps={{
                  name: "age",
                  id: "age-simple"
                }}
                className={classes.selectEmpty}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="MA">Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              <FormHelperText>Required</FormHelperText>
            </FormControl>
          </div>
        );
      case 2:
        return (
          <div>
            <textarea
              placeholder="Please type here..."
              name="value"
              value={this.state.value}
              rows="12"
              cols="50"
              onChange={this.handletextchange}
            />

            <br />
          </div>
        );
      default:
        return <TextField/>;
    }
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Navbar/>
        <div className="container">
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => {
            return (

              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography>{this.getStepContent(index, classes)}</Typography>
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
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
        </div>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&quot;re finished</Typography>
            <Button onClick={this.handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
    );
  }
}

VerticalLinearStepper.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(VerticalLinearStepper);
