import React from "react";
import { Rhv } from "react-horizontal-vertical";
import yellowsofa from "../../assets/yellowsofa.jpg";
import purple from "../../assets/purple.jpg";
import weirdpainting from "../../assets/weirdpainting.jpg";
import orangeblue from "../../assets/orangeblue.jpg";
import grey from "../../assets/grey.jpg";

import "./index.css"; // Create this file for styling

const images = [yellowsofa, purple, weirdpainting, orangeblue, grey];

const Slider = () => {
  return (
    <Rhv horizontal>
      {images.map((src, index) => (
        <div key={index} className="image-container">
          <img src={src} alt={`Image ${index + 1}`} className="slider-image" />
        </div>
      ))}
    </Rhv>
  );
};

export default Slider;
