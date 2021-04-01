import React from "react";
import { extractLabels } from "../../utils";
import LocationCheckbox from "./LocationCheckbox";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  checkboxContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "1em",
  },
}));

const Checkboxes = ({ handleLocation, locations }) => {
  const classes = useStyles();

  return (
    <div className={classes.checkboxContainer}>
      {extractLabels().map((label) => (
        <div key={label}>
          <LocationCheckbox
            label={label}
            handleLocation={handleLocation}
            locations={locations}
          />
        </div>
      ))}
    </div>
  );
};

export default Checkboxes;
