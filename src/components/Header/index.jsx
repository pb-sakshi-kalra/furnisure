import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Button } from "@mui/material";
import "./index.css";
import logo from "../../assets/logo/FS Logo.png";

const Header = () => {
  return (
    <AppBar className="header-wrapper">
      <Toolbar className="header">
        <Typography
          variant="h6"
          component="div"
          className="logo"
          sx={{ flexGrow: 1 }}
        >
          <img style={{ width: "100px" }} src={logo} />
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
