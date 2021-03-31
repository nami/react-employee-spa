import React, { useState } from "react";
import { Checkbox } from "@material-ui/core";

const LocationCheckbox = ({ location }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <span>{location}</span>
      <Checkbox
        name={location}
        disabled={false}
        checked={checked}
        onChange={handleChange}
      />
    </div>
  );
};

export default LocationCheckbox;
