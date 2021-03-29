import React from "react";
import { extractSalaries } from "../utils";
import {
  Container,
  Grid,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableContainer,
  TableCell,
} from "@material-ui/core";

function createData(location, salary, delta) {
  return { location, salary, delta };
}

const tableRows = extractSalaries().map((obj) =>
  createData(obj.location, obj.salary, obj.delta)
);

const SalaryTable = (props) => {
  return (
    <Container maxWidth="lg" className="chartContainer">
      <Grid container>
        <Grid item xs={12}></Grid>
        <div className="salaryTable">
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Location</TableCell>
                  <TableCell align="right">Salary</TableCell>
                  <TableCell align="right">Delta</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableRows.map((row) => (
                  <TableRow key={row.salary}>
                    <TableCell component="th" scope="row">
                      {row.location}
                    </TableCell>
                    <TableCell align="right">${row.salary}</TableCell>
                    <TableCell align="right">{row.delta}%</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Grid>
    </Container>
  );
};

export default SalaryTable;
