// components
import SalaryTable from "./components/SalaryTable";
import Chart from "./components/Chart";
// css
import "./App.css";
import { Typography } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h2">Employee Salary</Typography>
        <Chart />
        <SalaryTable />
      </header>
    </div>
  );
}

export default App;
