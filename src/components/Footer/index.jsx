// src/components/Footer.js
import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import "./index.css";
import logo from "../../assets/logo/logo.png";

const Footer = () => {
  return (
    <Box className="footer" component="footer" p={4}>
      <Typography
        variant="h6"
        component="div"
        className="logo"
        sx={{ flexGrow: 1 }}
      >
        <img style={{ width: "100px" }} src={logo} />
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <h6 className="subscribe-text">
            SUBSCRIBE TO GET OUR LATEST UPDATES
          </h6>
          <Box className="subscribe-form">
            <input placeholder="YOUR EMAIL ADDRESS" className="input" />
            <input placeholder="YOUR NAME" className="input" />
            <Button variant="outlined" className="sign-up-button">
              SIGN UP
            </Button>
          </Box>
        </Grid>

        {/* Navigation and Contact Section */}
        <Grid container item xs={12} spacing={3} className="footer-main">
          <Grid item xs={12} md={3}>
            <Typography variant="h6" className="footer-title">
              NAVIGATION
            </Typography>
            <Typography className="links">Categories</Typography>
            <Typography className="links">Portfolio</Typography>
            <Typography className="links">About</Typography>
            <Typography className="links">News & Events</Typography>
            <Typography className="links">Contact Us</Typography>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" className="footer-title">
              CONTACT
            </Typography>
            <Typography className="links">T: +66 2 365 0789</Typography>
            <Typography className="links">F: +66 2 365 0781</Typography>
            <Typography className="links">E: WELCOME@DM-HOME.COM</Typography>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" className="footer-title">
              ADDRESS
            </Typography>
            <Typography className="footer-links">
              555 THONG LO 19, SUKHUMVIT 55, KLONGTON-NUA, WATTANA, BANGKOK
              10110, THAILAND
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
