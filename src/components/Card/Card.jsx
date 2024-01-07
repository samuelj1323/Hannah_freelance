import React from "react";
import { Typography, Grid, useMediaQuery, useTheme } from "@mui/material";
import image from "../../assets/coffeeImage.png";
const Card = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <div>
      <Grid container spacing={2}>
        {matches && (
          <Grid item sm={4}>
            <img style={{ width: 300, paddingLeft: "30%" }} src={image} />
          </Grid>
        )}

        <Grid item xs={12} sm={8}>
          <Typography variant={"h4"}>Card Title</Typography>
          <Typography>Date</Typography>
          <Typography>Card Content</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Card;
