import React, { useState, useEffect } from "react";
import { Checkbox } from "@material-ui/core";

const LocationCheckbox = ({ label, handleLocation, locations }) => {
  const [checked, setChecked] = useState(false);

  // filter locations array (add if checked, remove if unchecked)
  useEffect(() => {
    if (checked) {
      handleLocation([...locations, label]);
    } else {
      const newLocations = locations.filter((location) => location !== label);
      handleLocation([...newLocations]);
    }
  }, [checked]);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <Checkbox
        name={label}
        disabled={false}
        checked={checked}
        onChange={handleChange}
        style={{ color: "#04A49A" }}
      />
      <span>{label}</span>
    </div>
  );
};

export default LocationCheckbox;
