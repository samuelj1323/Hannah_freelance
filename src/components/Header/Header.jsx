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

const Header = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <AppBar
      position="sticky"
      style={{
        backgroundColor: theme.palette.background.default,
        boxShadow: "none",
      }}
    >
      <Toolbar style={{ justifyContent: "" }}>
        <Typography
          onClick={() => navigate("/")}
          sx={{ flexGrow: 1, fontFamily: "times-new-roman" }}
          variant="h4"
          color={theme.palette.text.primary}
        >
          Hannah Mahan
        </Typography>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            color: theme.palette.text.primary,
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
