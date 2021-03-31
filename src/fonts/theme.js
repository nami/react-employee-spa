import FuturaBook from "./Futura-Book.ttf";
import { createMuiTheme } from "@material-ui/core/styles";

const Futura = {
  fontFamily: "Futura",
  fontStyle: "normal",
  src: `
      local('Futura-Book'),
      url(${FuturaBook}) format('ttf')
    `,
};

export const theme = createMuiTheme({
  typography: {
    fontFamily: ["Futura"].join(","),
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [Futura],
      },
    },
  },
});
