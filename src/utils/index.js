import data from "../data/EmployeeDataset.json";

export const extractLabels = () => {
  // get array of locations including duplicates
  const allLocations = data.map((obj) => obj.location);
  // retrieve only
  return [...new Set(allLocations)];
};

const calculatePercentageDiff = (current, previous) => {
  return ((current - previous) / previous) * 100;
};

const parseStringtoFloat = (str) => {
  return parseFloat(str.match(/[+-]?\d+(\.\d+)?/g));
};

export const extractSalaries = () => {
  // total current salary
  let totalCurrSalary = 0;
  // total previous salary
  let totalPrevSalary = 0;
  let salaries = extractLabels().map((loc) => {
    // array of all objects by location
    const locObj = data.filter((obj) => obj.location === loc);
    // aggregated current salary by location
    const aggCurrSalary = locObj.reduce((sum, val) => {
      // salary is a string with decimals (e.g. "$11010.09")
      return sum + parseStringtoFloat(val.currSalary);
    }, 0);
    totalCurrSalary += aggCurrSalary;
    const aggPrevSalary = locObj.reduce((sum, val) => {
      // salary is a string with decimals (e.g. "$11010.09")
      return sum + parseStringtoFloat(val.prevSalary);
    }, 0);
    totalPrevSalary += aggPrevSalary;
    // calculate percentage increase/decrease
    const delta = calculatePercentageDiff(aggCurrSalary, aggPrevSalary);
    return {
      location: loc,
      // round up to 2 decimals
      salary: Math.round(aggCurrSalary),
      delta: Math.round(delta),
    };
  });
  // total delta
  const totalDelta = calculatePercentageDiff(totalCurrSalary, totalPrevSalary);
  // for table
  salaries.push({
    location: "Total",
    salary: Math.round(totalCurrSalary),
    delta: Math.round(totalDelta),
  });
  return salaries;
};

export const formatAmount = (amt) => {
  return `$${new Intl.NumberFormat("en-IN").format(amt.toString())}`;
};
