import React from "react";
import "./index.css";

import staircase from "../../assets/staircase.jpg";
import office from "../../assets/office.jpg";

const Selection = () => {
  return (
    <div className="about-container">
      <div
        className="image-container"
        style={{ backgroundImage: `url(${staircase})` }}
      >
        <h2 className="title">Home</h2>
        <h3 className="furniture">Furniture</h3>
      </div>
      <div
        className="image-container"
        style={{ backgroundImage: `url(${office})` }}
      >
        <h2 className="title">Event</h2>
        <h3 className="furniture">Furniture</h3>
      </div>
    </div>
  );
};

export default Selection;
