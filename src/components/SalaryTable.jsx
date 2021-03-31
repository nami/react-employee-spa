import React from "react";
import { extractSalaries, formatAmount } from "../utils";
import {
  Table,
  TableBody,
  TableRow,
  TableContainer,
  TableCell,
  withStyles,
  Paper,
} from "@material-ui/core";
import MuiTableHead from "@material-ui/core/TableHead";

function createData(location, salary, delta) {
  return { location, salary, delta };
}

const tableRows = extractSalaries().map((obj) =>
  createData(obj.location, obj.salary, obj.delta)
);

const TableHead = withStyles((theme) => ({
  root: {
    backgroundColor: "#04A49A",
  },
}))(MuiTableHead);

const TableHeaderCell = withStyles((theme) => ({
  root: {
    color: "white",
  },
}))(TableCell);

const SalaryTable = () => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="salary table">
          <TableHead>
            <TableRow>
              <TableHeaderCell>Location</TableHeaderCell>
              <TableHeaderCell>Salary</TableHeaderCell>
              <TableHeaderCell>Delta</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableRows.map((row) => (
              <TableRow key={row.salary}>
                <TableCell component="th" scope="row">
                  {row.location}
                </TableCell>
                <TableCell>{formatAmount(row.salary)}</TableCell>
                <TableCell>{row.delta}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SalaryTable;
