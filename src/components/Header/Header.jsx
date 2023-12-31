import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  useTheme,
} from "@mui/material";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";

const Header = () => {
  const theme = useTheme();
  return (
    <AppBar
      position="static"
      style={{ backgroundColor: theme.palette.topnav.main }}
    >
      <Toolbar style={{ justifyContent: "" }}>
        <IconButton>
          <BookOutlinedIcon
            style={{ color: theme.typography.lightPrimaryText }}
          />
        </IconButton>
        <Typography
          sx={{ flexGrow: 1, fontFamily: "times-new-roman" }}
          variant="h4"
          color={theme.typography.lightPrimaryText}
        >
          Hannah Mahan
        </Typography>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            color: theme.typography.lightSecondaryText,
          }}
        >
          <Button variant="text" color="inherit">
            About
          </Button>
          <Button variant="text" color="inherit">
            Writings
          </Button>
          <Button variant="text" color="inherit">
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
