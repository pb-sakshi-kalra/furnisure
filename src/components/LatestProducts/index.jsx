import React, { useState } from "react";
import ChairLayout from "../ChairLayout";
import "./index.css";

import wire_cocktail_table from "../../assets/wire_cocktail_table.jpg";
import jali_furnitures from "../../assets/jali_furnitures.jpg";

const products = [
  {
    id: 1,
    name: "Couch",
    image1: jali_furnitures,
    image2: wire_cocktail_table,
  },
  {
    id: 2,
    name: "Chair",
    image1: jali_furnitures,
    image2: wire_cocktail_table,
  },
  {
    id: 3,
    name: "Table",
    image1: jali_furnitures,
    image2: wire_cocktail_table,
  },
];

const LatestProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="latest-slider">
      <h1 className="latest-heading">Latest Products</h1>
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="latest-slide">
        <img src={products[currentIndex]?.image1} />
      </div>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};  22

export default LatestProducts;
