import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
  Stack,
  Container,
} from "@mui/material";
import Headshot from "../assets/HannahHeadshot.png";
/**
 *
 * Make an api call that retrieves the most recent posts for the reader.
 */
const Landing = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box>
      <Container>
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            style={{ flex: 1, display: "flex", justifyContent: "center" }}
          >
            <Stack style={{ marginTop: 50 }}>
              <Typography variant="h3">
                Hi, I'm
                <span style={{ color: "orange" }}> Hannah.</span>
              </Typography>
              <Typography style={{ marginTop: 25 }}>
                I help creator economy companies and influencers grow their
                business through content creation strategy and swoon-worthy
                storytelling.
              </Typography>
              <Button style={{ maxWidth: 250 }} variant="contained">
                Let's have a chat
              </Button>
            </Stack>
          </Grid>
          {!isMediumScreen && (
            <Grid item xs={12} md={6}>
              <img src={Headshot} sx={{ maxWidth: "40%" }} />
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Landing;
