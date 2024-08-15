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

const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    console.log("this is called or not ");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="product-slider">
      <h1 className="product-heading">TOP CATEGORIES</h1>
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="product-slide">
        <ChairLayout product={products[currentIndex]} />
      </div>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default ProductSlider;
