import React from "react";
import {
  Typography,
  Card,
  TextField,
  Button,
  Stack,
  Grid,
} from "@mui/material";

const Login = () => {
  return (
    <Stack
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h3">Login</Typography>
      <Card>
        <Stack>
          <Grid container>
            <Grid item xs={12} style={{ backgroundColor: "white" }}>
              <TextField placeholder="email" style={{ margin: 5 }} />
            </Grid>
            <Grid item xs={12}>
              <TextField placeholder="password" style={{ margin: 5 }} />
            </Grid>
          </Grid>
          <Button>Log in</Button>
        </Stack>
      </Card>
    </Stack>
  );
};

export default Login;
