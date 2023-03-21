
import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#556cd6",
      dark: "#053e85",
    },
    secondary: {
      main: red.A400,
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
