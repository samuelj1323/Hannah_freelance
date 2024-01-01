// theme.js
import { createTheme } from "@mui/material/styles";
const customPalette = {
  paleBackground: "rgb(251, 238, 218)",
  darkBrownBackground: "rgb(252, 239, 219)",
  softRedBackground: "rgb(252, 237, 218)",
  midBrownBackground: "rgb(252, 239, 220)",
  creamBackground: "rgb(254, 241, 221)",
  rustRedBackground: "rgb(255, 243, 223)",
  tanBackground: "rgb(253, 240, 220)",
  darkCreamBackground: "rgb(255, 242, 222)",
  softOrangeBackground: "rgb(255, 244, 224)",
  dustyPinkBackground: "rgb(250, 237, 217)",
  darkHeaderBackround: "#21201e",
  white: "rgb(255,255,255)",
  menuColor: "rgb(203, 158,118)",
  dividerRed: "rgb(228,182,166)",
};
const theme = createTheme({
  palette: {
    // Example of using custom colors
    primary: {
      main: customPalette.paleBackground,
    },
    secondary: {
      main: customPalette.darkBrownBackground,
    },
    topnav: {
      main: customPalette.darkHeaderBackround,
    },
    divider: {
      main: customPalette.dividerRed,
    },
    background: {
      default: customPalette.creamBackground,
      paper: customPalette.darkCreamBackground,
    },

    // Add other color usages as needed
  },
  typography: {
    lightPrimaryText: customPalette.paleBackground,
    lightSecondaryText: customPalette.menuColor,
  },
  // ...other theme customizations
});

export default theme;
