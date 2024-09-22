// src/components/Footer.js
import "./index.css";
import logo from "../../assets/logo/FS Logo.png";

import { FooterLinks } from "../FooterLinks";

const Footer = () => {
  return (
    <div className="footer-div">
      <div className="footerLinks">
        <FooterLinks />
      </div>
      <div className="contact">
        <h3 className="footer-header">Reach Out</h3>
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
        <h3 className="footer-header">Address</h3>
        <p></p>
        <p>C17, DIC</p>
        <p>Dubai, UAE</p>
      </div>
      <div className="subscribe-footer">
        <img className="logo" src={logo} />
        <div>
          <h3 className="footer-header">Curiosity Piqued!</h3>
          <div className="input-div">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
          </div>
          <div className="button">
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
