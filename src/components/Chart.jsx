import React, { useState, useEffect } from "react";
import { extractLabels, extractSalaries, formatAmount } from "../utils";
import Checkboxes from "./Checkboxes";
import { Container, Paper } from "@material-ui/core";
import { Bar } from "react-chartjs-2";

const Chart = () => {
  const [checkedLocations, setCheckedLocations] = useState([]);
  const [salaries, setSalaries] = useState(extractSalaries());
  const [locationLabels, setLocationLabels] = useState(extractLabels());

  const chartData = {
    labels: locationLabels,
    datasets: [
      {
        label: "Aggregated current salaries",
        backgroundColor: "#04A49A",
        // remove Total object from chart
        data: salaries
          .filter((obj) => obj.location !== "Total")
          .map((obj) => obj.salary),
      },
    ],
  };

  useEffect(() => {
    if (checkedLocations.length > 0) {
      // salaries filtered by location/s
      const newSalaries = extractSalaries().filter((obj) =>
        checkedLocations.includes(obj.location)
      );
      setSalaries(newSalaries);
      setLocationLabels(checkedLocations);
    } else {
      // show all salaries when no checkboxes are checked
      setSalaries(extractSalaries());
      setLocationLabels(extractLabels());
    }
  }, [checkedLocations]);

  const handleLocation = (locations) => {
    setCheckedLocations(locations);
  };

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
      <Checkboxes
        handleLocation={handleLocation}
        locations={checkedLocations}
      />
    </div>
  );
};

export default Chart;
