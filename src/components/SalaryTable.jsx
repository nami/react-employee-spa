import React, { useState, useEffect } from "react";
import { extractSalaries, formatAmount } from "../utils";
import Checkboxes from "./Checkboxes";
import {
  Table,
  TableBody,
  TableRow,
  TableContainer,
  TableCell,
  withStyles,
  Paper,
  makeStyles,
} from "@material-ui/core";
import MuiTableHead from "@material-ui/core/TableHead";

const createData = (location, salary, delta) => {
  return { location, salary, delta };
};

const TableHead = withStyles((theme) => ({
  root: {
    backgroundColor: "#04A49A",
  },
}))(MuiTableHead);

const StyledTableBody = withStyles((theme) => ({
  root: {
    backgroundColor: "#FAFAFA",
  },
}))(TableBody);

const TableHeaderCell = withStyles((theme) => ({
  root: {
    color: "white",
    textAlign: "center",
  },
}))(TableCell);

const TableBodyCell = withStyles((theme) => ({
  root: {
    textAlign: "center",
  },
}))(TableCell);

const useStyles = makeStyles({
  totalCell: {
    fontWeight: "500",
  },
  zero: {
    backgroundColor: "#FFFF00",
    padding: "0.5em 2.5em",
    borderRadius: "15px",
  },
  negative: {
    backgroundColor: "#FFA500",
    padding: "0.5em 2.7em",
    borderRadius: "15px",
  },
  negativeLong: {
    backgroundColor: "#FFA500",
    padding: "0.5em 2.4em",
    borderRadius: "15px",
  },
  positive: {
    backgroundColor: "#ADFF2E",
    padding: "0.5em 2.5em",
    borderRadius: "15px",
  },
  positiveLong: {
    backgroundColor: "#ADFF2E",
    padding: "0.5em 2.2em",
    borderRadius: "15px",
  },
});

const SalaryTable = () => {
  const classes = useStyles();
  const [checkedLocations, setCheckedLocations] = useState([]);
  const [salaries, setSalaries] = useState(extractSalaries());

  const tableRows = salaries.map((obj) =>
    createData(obj.location, obj.salary, obj.delta)
  );

  useEffect(() => {
    if (checkedLocations.length > 0) {
      // salaries filtered by location/s
      const newSalaries = extractSalaries().filter((obj) =>
        checkedLocations.includes(obj.location)
      );
      setSalaries(newSalaries);
    } else {
      // show all salaries when no checkboxes are checked
      setSalaries(extractSalaries());
    }
  }, [checkedLocations]);

  const handleLocation = (locations) => {
    setCheckedLocations(locations);
  };

  // return component based on if delta percentage if positive/negative or 0
  const delta = (percentage) => {
    if (percentage === 0) {
      return (
        <TableBodyCell>
          <span className={classes.zero}>+{percentage}%</span>
        </TableBodyCell>
      );
    } else if (percentage < 0) {
      return (
        <TableBodyCell>
          <span
            className={
              percentage.toString().length > 2
                ? classes.negativeLong
                : classes.negative
            }
          >
            {percentage}%
          </span>
        </TableBodyCell>
      );
    } else {
      return (
        <TableBodyCell>
          <span
            className={
              percentage.toString().length > 1
                ? classes.positiveLong
                : classes.positive
            }
          >
            +{percentage}%
          </span>
        </TableBodyCell>
      );
    }
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table style={{ tableLayout: "fixed" }}>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Location</TableHeaderCell>
              <TableHeaderCell>Salary</TableHeaderCell>
              <TableHeaderCell>Delta</TableHeaderCell>
            </TableRow>
          </TableHead>
          <StyledTableBody>
            {tableRows.map((row) => (
              <TableRow key={row.salary}>
                <TableBodyCell
                  className={row.location === "Total" ? classes.totalCell : ""}
                >
                  {row.location}
                </TableBodyCell>
                <TableBodyCell>{formatAmount(row.salary)}</TableBodyCell>
                {delta(row.delta)}
              </TableRow>
            ))}
          </StyledTableBody>
        </Table>
      </TableContainer>
      <Checkboxes
        handleLocation={handleLocation}
        locations={checkedLocations}
      />
    </div>
  );
};

export default SalaryTable;
