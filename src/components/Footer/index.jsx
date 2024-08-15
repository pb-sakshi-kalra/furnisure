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
import logo from "../../assets/logo/FS Logo.png";

const Footer = () => {
  return (
    <Footer className="footer-div">
      <div className="footer-main-div">
        <div className="subscribe-footer">
          <img className="logo" src={logo} />
          <div>
            <h3>Curiosity Piqued!</h3>
            <div className="input-div">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
            </div>
            <div className="button">
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="contact">
          <h4>Reach Out</h4>
          <p>
            <span className="b">E :</span> info@furnisure.me
          </p>
          <p>
            <span className="b">P :</span> +971 4 576 9174
          </p>
          <p>
            <span className="b">W :</span> +971 58 57 56 247
          </p>
        </div>
        <div className="address">
          <h4>Address</h4>
          <p></p>
          <p>C17, DIC</p>
          <p>Dubai, UAE</p>
        </div>
      </div>
    </Footer>
  );
};

export default Footer;
