import React, { useState } from "react";
import ChairLayout from "../ChairLayout";
import "./index.css";

import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import banner4 from "../../assets/banner4.jpg";
import banner5 from "../../assets/banner5.jpg";
import banner6 from "../../assets/banner6.jpg";
import banner7 from "../../assets/banner7.jpg";
import banner8 from "../../assets/banner8.jpg";
import banner9 from "../../assets/banner9.jpg";
import banner10 from "../../assets/banner10.jpg";
import banner11 from "../../assets/banner11.jpg";
import banner12 from "../../assets/banner12.jpg";
import banner13 from "../../assets/banner13.jpg";
import banner14 from "../../assets/banner14.jpg";
import banner15 from "../../assets/banner15.jpg";
import banner16 from "../../assets/banner16.jpg";
import banner17 from "../../assets/banner17.jpg";
import banner18 from "../../assets/banner18.jpg";
import banner19 from "../../assets/banner19.jpg";

const products = [
  { id: 1, name: "Couch", image1: banner2, image2: banner3 },
  { id: 2, name: "Chair", image1: banner5, image2: banner6 },
  { id: 3, name: "Table", image1: banner11, image2: banner9 },
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
      <h1 className="product-heading">Porduct Categories</h1>
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
