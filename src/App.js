// components
import Table from "./components/Table";
import Chart from "./components/Chart";
// css
import "./App.css";
import { Container, Grid, Paper, Typography } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h2">Employee Salary</Typography>
        <Chart />
        <Table />
      </header>
    </div>
  );
}

export default App;
