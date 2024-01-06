// App.js
import React from "react";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme"; // Import the custom theme
import AppRouter from "./AppRouter";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
