import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Button } from "@mui/material";
import "./index.css";

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
          Furnisure
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
