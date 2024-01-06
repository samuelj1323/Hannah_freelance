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
import { useNavigate } from "react-router-dom";
/**
 *
 * /@TODO:
 *  I need to make the header route based on what is clicked,
 * Hannah's name: Landing
 * About: about
 * ...
 * */

const Header = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <AppBar
      position="static"
      style={{ backgroundColor: theme.palette.topnav.main }}
    >
      <Toolbar style={{ justifyContent: "" }}>
        <IconButton onClick={() => navigate("/")}>
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
          <Button
            onClick={() => navigate("/about")}
            variant="text"
            color="inherit"
          >
            About
          </Button>
          <Button
            onClick={() => navigate("/writings")}
            variant="text"
            color="inherit"
          >
            Writings
          </Button>
          <Button
            onClick={() => navigate("/contact")}
            variant="text"
            color="inherit"
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
