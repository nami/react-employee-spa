import React, { useState } from "react";
import { extractLabels } from "../../utils";
import LocationCheckbox from "./LocationCheckbox";
import { makeStyles } from "@material-ui/core";

const Checkboxes = ({ handleLocation, locations }) => {
  return (
    <div>
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
