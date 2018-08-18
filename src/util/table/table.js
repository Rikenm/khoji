import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {Link} from "react-router-dom";

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const styles = theme => ({
  root: {
    width: "100%",
    
    marginTop: theme.spacing.unit * 3
  },
  table: {
    minWidth: 100
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: "theme.palette.background.default"
    }
  }
});

let id = 0;
function createData(name) {
  id += 1;
  return { id, name};
}

const data = [
  createData("Frozen yoghurt"),
  createData("Ice cream sandwich"),
  createData("Eclair"),
  createData("Cupcake"),
  createData("Gingerbread")
];

function CustomizedTable(props) {
  const { classes, data, whichState } = props;
  
  console.log(props,"aflsdlkj=====")


  const clicked = () => {
    console.log("clicked");
  };

  return (

    
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>
            <span >
              <Link style={{color:"white"}} to= {`/listing/${data.name}?location=${whichState}`} > {data.name} </Link>
                  </span>
            </CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.subitems.map((item,i) => {
            return (
              <TableRow className={classes.row} key={i}>
                <CustomTableCell onClick={clicked} component="th" scope="row" key={i}>
                  
                  <span >
              <Link to= {`/listing/${data.name}/${item.name}?location=${whichState}`} > {item.name} </Link>
                  </span>
                </CustomTableCell>
                
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedTable);
