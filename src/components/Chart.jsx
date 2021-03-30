import React from "react";
import { extractLabels, extractSalaries } from "../utils";
import { Container, Grid } from "@material-ui/core";
import { Bar } from "react-chartjs-2";

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
    <Grid item xs={10.5}>
      <div className="barChart">
        <Bar data={chartData} />
      </div>
    </Grid>
  );
};

export default Chart;
