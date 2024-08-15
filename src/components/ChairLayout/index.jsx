import React from "react";
import "./index.css";

const ChairLayout = ({ product }) => {
  return (
    <div className="layout-container">
      <div className="images">
        <img src={product?.image1} alt="Chair Image 1" className="main-image" />
        <div className="overlay-image">
          <img src={product?.image2} alt="Chair Image 2" />
        </div>
      </div>
      <div className="text-container">
        <div>
          <h3>{product?.name?.toUpperCase()}</h3>
          <button className="shop-button">
            SHOP {product?.name?.toUpperCase()}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChairLayout;
