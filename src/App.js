import React from "react";
// components
import SalaryTable from "./components/SalaryTable";
import Chart from "./components/Chart";
// css
import "./App.css";
import { Typography, Tabs, Tab, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AssessmentIcon from "@material-ui/icons/Assessment";
import TableChartIcon from "@material-ui/icons/TableChart";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "100vh",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    backgroundColor: "#04A49A",
    height: "100%",
    color: "white",
  },
  chart: {
    padding: "2em 0",
    height: "50vh",
  },
  table: {
    height: "50vh",
  },
}));

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className={classes.root}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            TabIndicatorProps={{
              style: { backgroundColor: "white" },
            }}
            value={value}
            onChange={handleChange}
            aria-label="chart and table tabs"
            className={classes.tabs}
          >
            <Tab
              icon={<AssessmentIcon style={{ fill: "white" }} />}
              label="Chart"
              {...a11yProps(0)}
              className={classes.chart}
            />
            <Tab
              icon={<TableChartIcon style={{ fill: "white" }} />}
              label="Table"
              {...a11yProps(1)}
              className={classes.table}
            />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Chart />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <SalaryTable />
          </TabPanel>
        </div>
      </header>
    </div>
  );
}

export default App;
