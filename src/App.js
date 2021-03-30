import React from "react";
// components
import SalaryTable from "./components/SalaryTable";
import Chart from "./components/Chart";
// css
import "./App.css";
import { Typography, Tabs, Tab, Box, Grid } from "@material-ui/core";
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
  tab: {
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
      <Grid Container>
        <div className={classes.root}>
          <Grid item xs={1.5}>
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
                className={classes.tab}
              />
              <Tab
                icon={<TableChartIcon style={{ fill: "white" }} />}
                label="Table"
                {...a11yProps(1)}
                className={classes.tab}
              />
            </Tabs>
          </Grid>
          <TabPanel value={value} index={0}>
            <Chart />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <SalaryTable />
          </TabPanel>
        </div>
      </Grid>
    </div>
  );
}

export default App;
