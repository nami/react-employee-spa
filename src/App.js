import React from "react";
// styling
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./fonts/theme";
//components
import NavigationTabs from "./components/NavigationTabs";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationTabs />
    </ThemeProvider>
  );
}

export default App;
