import data from "../data/EmployeeDataset.json";

export const extractLabels = () => {
  // get array of locations including duplicates
  const allLocations = data.map((obj) => obj.location);
  // retrieve only
  return [...new Set(allLocations)];
};

export const extractSalaries = () => {
  return extractLabels().map((loc) => {
    // array of all objects by location
    const locObj = data.filter((obj) => obj.location === loc);
    // aggregated current salary by location
    const aggCurrSalary = locObj.reduce((sum, val) => {
      // salary is a string with decimals (e.g. "$11010.09")
      return sum + parseFloat(val.currSalary.match(/[+-]?\d+(\.\d+)?/g));
    }, 0);
    const aggPrevSalary = locObj.reduce((sum, val) => {
      // salary is a string with decimals (e.g. "$11010.09")
      return sum + parseFloat(val.prevSalary.match(/[+-]?\d+(\.\d+)?/g));
    }, 0);
    // calculate percentage increase/decrease
    const delta = ((aggCurrSalary - aggPrevSalary) / aggPrevSalary) * 100;
    return {
      location: loc,
      // round up to 2 decimals
      salary: Math.round(aggCurrSalary),
      delta: Math.round(delta),
    };
  });
};
