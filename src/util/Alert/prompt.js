import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "@material-ui/core/Input";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
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
      value: this.props.defaultValue
    };

    this.onChange = e => this._onChange(e);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      this.props.onChange(this.state.value);
    }
  }

  _onChange(e) {
    let value = e.target.value;

    this.setState({ value: value });
  }

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
          <InputLabel htmlFor="age-simple">Country</InputLabel>
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

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-simple">State</InputLabel>
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

        <FormControl className={classes.formControl}>
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
      </div>
    );
  }
}

export default withStyles(styles)(Prompt);
