import React, { useState } from "react";
import { extractLabels, extractSalaries, formatAmount } from "../utils";
import Checkboxes from "./Checkboxes";
import { Container, Paper } from "@material-ui/core";
import { Bar } from "react-chartjs-2";

const chartData = {
  labels: extractLabels(),
  datasets: [
    {
      label: "Aggregated current salaries",
      backgroundColor: "#04A49A",
      // remove Total object from chart
      data: extractSalaries()
        .filter((obj) => obj.location !== "Total")
        .map((obj) => obj.salary),
    },
  ],
};

const Chart = () => {
  const [checkedLocation, setCheckedLocation] = useState();

  return (
    <div>
      <Container component={Paper}>
        <Bar
          data={chartData}
          options={{
            responsive: true,
            tooltips: {
              backgroundColor: "#F6F8FA",
              borderWidth: 1,
              titleFontColor: "#6B6C6F",
              bodyFontColor: "#3E3F42",
              callbacks: {
                label: (amt) => {
                  return formatAmount(amt.value);
                },
              },
            },
          }}
        />
      </Container>
      <Checkboxes />
    </div>
  );
};

export default Chart;
