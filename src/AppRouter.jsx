import React from "react";
import Header from "./components/Header/Header";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Writings from "./pages/Writings";
import Contact from "./pages/Contact";
import { CssBaseline, Stack, useTheme } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const AppRouter = () => {
  const theme = useTheme();
  return (
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
  );
};

export default AppRouter;
