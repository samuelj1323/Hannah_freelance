import React from "react";
import { createTheme } from "@mui/material";

export const ThemeContext = React.createContext();

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "orange",
          textTransform: "none",
          color: "#000000",
          borderRadius: 0,
          fontSize: 17,
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "light-orange", // Replace with your desired hover color
            color: "white",
            boxShadow: "none",
          },
        },
      },
    },
  },
  palette: {
    background: {
      default: "rgb(244,242,232)",
      slightlyDarker: "#DDC8BA",
    },
    text: {
      primary: "#000000",
      fontFamily: "the-seasons",
    },
    primary: {
      main: "#a98274",
    },
  },
});

export default theme;
