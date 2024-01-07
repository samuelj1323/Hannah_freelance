import React from "react";
import { Box, Typography, Stack, Divider, useTheme } from "@mui/material";
import Card from "../components/Card/Card";
/**
 *
 * Make an api call that retrieves the most recent posts for the reader.
 */
const Landing = () => {
  const theme = useTheme();
  return (
    <Box>
      <Stack>
        <Typography
          style={{ textAlign: "center", fontFamily: "times-new-roman" }}
          variant="h1"
        >
          A Freelance Writer
        </Typography>
        <Divider
          style={{
            color: theme.palette.divider.main,
          }}
          variant="middle"
        />
        <Card />
      </Stack>
    </Box>
  );
};

export default Landing;
