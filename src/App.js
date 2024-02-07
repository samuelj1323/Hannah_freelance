// App.js
import React from "react";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme"; // Import the custom theme
import AppRouter from "./AppRouter";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firestore";
function App() {
  const getEntries = async () => {
    const samplesCol = collection(db, "writing-samples");
    const samplesSnapshot = await getDocs(samplesCol);
    const samples = samplesSnapshot.docs.map((doc) => doc.data());
    return samples;
  };

  React.useEffect(() => {
    console.log(getEntries());
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
