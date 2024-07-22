import React from "react";
import { Container, TextField, Button, Typography } from "@mui/material";
import "./index.css";

const Footer = () => {
  return (
    <footer className={"footer"}>
      <Container className="container">
        <div className={"socialIcons"}>
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-line"></i>
          </a>
          <a href="#">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        <div className="inner">
          <div className={"navigation"}>
            <Typography variant="h6">NAVIGATION</Typography>
            <p>Categories</p>
            <p>Portfolio</p>
            <p>About</p>
            <p>News & Events</p>
            <p>Contact Us</p>
          </div>
          <div className={"contact"}>
            <Typography variant="h6">CONTACT</Typography>
            <p>T: +66 2 365 0789</p>
            <p>F: +66 2 365 0781</p>
            <p>E: WELCOME@DM-HOME.COM</p>
          </div>
          <div className={"address"}>
            <Typography variant="h6">ADDRESS</Typography>
            <p>
              555 THONG LO 19, SUKHUMVIT 55, KLONGTON-NUA, WATTANA, BANGKOK
              10110, THAILAND
            </p>
          </div>
        </div>
      </Container>

      <div className={"legal"}>
        <p>&copy; 2020 THE DECOR MART COMPANY LIMITED</p>
        <p>DESIGNED BY KOS DESIGN</p>
      </div>
      <div className={"cookiePolicy"}>
        <p>
          We use cookies and other tracking tools to personalize content,
          remember your preferences, provide you with a better experience, and
          make your visits to our website more effective. You can click "ACCEPT"
          to consent to these uses or learn more about our "Cookie Policy."
        </p>
        <Button className={"acceptButton"}>ACCEPT</Button>
      </div>
    </footer>
  );
};

export default Footer;
