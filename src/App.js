// App.js
import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/theme"; // Import the custom theme

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Ensures consistent baseline styles */}
      <div
        style={{
          backgroundColor: theme.palette.background.default,
          minHeight: "100vh",
        }}
      >
        <h1>Welcome to My Themed App</h1>
        {/* Your other components and content */}
      </div>
    </ThemeProvider>
  );
}

export default App;
