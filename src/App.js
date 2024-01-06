// App.js
import React from "react";
import { ThemeProvider, CssBaseline, Stack } from "@mui/material";
import theme from "./theme/theme"; // Import the custom theme
import Header from "./components/Header/Header";
import Landing from "./pages/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/">
        <CssBaseline /> {/* Ensures consistent baseline styles */}
        <Stack
          style={{
            backgroundColor: theme.palette.background.default,
            minHeight: "100vh",
          }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/hello-world" element={<>Hello world</>} />
          </Routes>
          {/* Your other components and content */}
        </Stack>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
