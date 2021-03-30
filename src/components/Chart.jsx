import React from "react";
import { extractLabels, extractSalaries } from "../utils";
import { Grid, Typography } from "@material-ui/core";
import { Bar } from "react-chartjs-2";

const chartData = {
  labels: extractLabels(),
  datasets: [
    {
      label: "Aggregated current salaries",
      backgroundColor: "#04A49A",
      data: extractSalaries().map((obj) => obj.salary),
    },
  ],
};

const Chart = (props) => {
  return (
    <Grid item xs={12}>
      <div className="barChart">
        <Bar
          data={chartData}
          options={{
            responsive: true,
            tooltips: {
              backgroundColor: "white",
              borderColor: "#EAEDF3",
              borderWidth: 1,
              titleFontColor: "#6B6C6F",
              bodyFontColor: "#3E3F42",
            },
          }}
        />
      </div>
    </Grid>
  );
};

export default Chart;
