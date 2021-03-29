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

const chartData = () => {};

const Chart = (props) => {
  return (
    <Container maxWidth="lg" className="chartContainer">
      <Grid container style={{ backgroundColor: "#F7F7F7" }}>
        <Grid item xs={12}></Grid>
        <div className="barChart">
          {console.log(extractLabels())}
          <Bar />
        </div>
      </Grid>
    </Container>
  );
};

export default Chart;
