import React from "react";
import { Box, Typography, Stack } from "@mui/material";

const Landing = () => {
  return (
    <Box>
      <Stack>
        <Typography
          style={{ textAlign: "center", fontFamily: "times-new-roman" }}
          variant="h1"
        >
          A Freelance Writer
        </Typography>
      </Stack>
    </Box>
  );
};

export default Landing;
