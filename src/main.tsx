import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css'
import { BrowserRouter } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "./context/contextMode";
import { ThemeProvider as GlobalTheme } from "@mui/material";
import theme from "./ui/theme";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider>
    <GlobalTheme theme={theme}>

    <React.StrictMode>
      {/* <CssBaseline /> */}
<BrowserRouter>
      <App />
</BrowserRouter>
    </React.StrictMode>
    </GlobalTheme>
    
  </ThemeProvider>
);
