import React, { useState } from "react";
import { extractLabels } from "../../utils";
import LocationCheckbox from "./LocationCheckbox";
import { makeStyles } from "@material-ui/core";

const Checkboxes = (props) => {
  return (
    <div>
      {extractLabels().map((label) => (
        <div key={label}>
          <LocationCheckbox location={label} />
        </div>
      ))}
    </div>
  );
};

export default Checkboxes;
