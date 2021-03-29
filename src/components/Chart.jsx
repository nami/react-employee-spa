import React from "react";
import data from "../data/EmployeeDataset.json";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
import { Bar } from "react-chartjs-2";

const extractLabels = () => {
  // get array of locations including duplicates
  const allLocations = data.map((obj) => obj.location);
  // retrieve only
  return [...new Set(allLocations)];
};

const extractSalaries = () => {
  return extractLabels().map((loc) => {
    // array of all objects by location
    const locObj = data.filter((obj) => obj.location === loc);
    // aggregated salary by location
    const aggSalary = locObj.reduce((sum, val) => {
      // salary is a string with decimals (e.g. "$11010.09")
      return sum + parseFloat(val.currSalary.match(/[+-]?\d+(\.\d+)?/g));
    }, 0);
    return {
      location: loc,
      // round up to 2 decimals
      salary: Number(aggSalary.toFixed(2)),
    };
  });
};

const chartData = {
  labels: extractLabels(),
  datasets: [
    {
      label: "Aggregated current salaries",
      backgroundColor: "#FF7C00",
      data: extractSalaries().map((obj) => obj.salary),
    },
  ],
};

const Chart = (props) => {
  return (
    <Container maxWidth="lg" className="chartContainer">
      <Grid container style={{ backgroundColor: "#F7F7F7" }}>
        <Grid item xs={12}></Grid>
        <div className="barChart">
          <Bar data={chartData} />
        </div>
      </Grid>
    </Container>
  );
};

export default Chart;
