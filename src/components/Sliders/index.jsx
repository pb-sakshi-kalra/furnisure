import React from "react";
import { Rhv } from "react-horizontal-vertical";

import "./index.css"; // Create this file for styling

const images = ["", "", "", "", ""];

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
