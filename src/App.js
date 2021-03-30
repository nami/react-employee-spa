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
    width: "100vw",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    backgroundColor: "#04A49A",
    color: "white",
    alignItems: "center",
  },
  tab: {
    height: "50vh",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "1em",
  },
}));

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={2} sm={1} md={1} lg={1} xl={1}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            TabIndicatorProps={{
              style: { opacity: 0 },
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
        <Grid item xs={10} sm={11} md={11} lg={11} xl={11}>
          <Typography variant="h5" className={classes.title}>
            Aggregated Salary by Location
          </Typography>
          <TabPanel value={value} index={0}>
            <Chart />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <SalaryTable />
          </TabPanel>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
