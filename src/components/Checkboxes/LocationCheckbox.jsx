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
      <span>{label}</span>
      <Checkbox
        name={label}
        disabled={false}
        checked={checked}
        onChange={handleChange}
      />
    </div>
  );
};

export default LocationCheckbox;
