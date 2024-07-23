import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Button } from "@mui/material";
import "./index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Typography
        variant="h6"
        component="div"
        className="logo"
        sx={{ flexGrow: 1 }}
      >
        Furnisure
      </Typography>
      <div className="footer-links">
        <a href="#about">About</a>
        <a href="#home">Home</a>
        <a href="#contact">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
