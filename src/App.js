// App.js
import React from "react";
import { ThemeProvider, CssBaseline, Stack } from "@mui/material";
import theme from "./theme/theme"; // Import the custom theme
import Header from "./components/Header/Header";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Writings from "./pages/Writings";
import Contact from "./pages/Contact";
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
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/writings" element={<Writings />} />
          </Routes>
          {/* Your other components and content */}
        </Stack>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
