import React from "react";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
import "./index.css";
import loader1 from "../../assets/loader/loader1.jpg";
import loader2 from "../../assets/loader/loader2.jpg";
import loader3 from "../../assets/loader/loader3.jpg";
import loader4 from "../../assets/loader/loader4.jpg";
import loader5 from "../../assets/loader/loader5.jpg";

const loaderImages = [loader1, loader2, loader3, loader4, loader5];

const categories = [
  "chairs",
  "arabic furniture",
  "coffee tables",
  "tables",
  "sofa",
  "outdoor furniture",
];

const ProductSlider = ({ product, sell = false, products, name }) => {
  const navigate = useNavigate();

  const filteredProducts = sell
    ? products
    : product.filter((prod) =>
        categories.some((category) =>
          prod?.name?.toLowerCase().includes(category)
        )
      );

  return (
    <div className="parent-product">
      <h1 className="heading">{name ? name : "Top Categories"}</h1>
      <div className={sell ? "scaleCarousel" : "carousel"}>
        {filteredProducts?.length > 0 ? (
          filteredProducts.map((prod, index) => (
            <div
              className="main-slider"
              key={index}
              onClick={() => {
                sell
                  ? navigate(`/product/${prod?.id}`)
                  : navigate(`/category/${prod?.id}`, {
                      state: { name: prod?.name },
                    });

                sell && window.location.reload();
              }}
            >
              <div className="backgorund-overlay"></div>
              <img
                src={
                  sell
                    ? prod?.images[1]?.src
                      ? prod?.images[1]?.src
                      : prod?.images[0]?.src
                    : loaderImages[index % loaderImages.length]
                }
                alt={prod?.name}
              />
              <div className="slider-des">
                <p>{prod?.name}</p>
              </div>
            </div>
          ))
        ) : (
          <div>No products available in this category.</div>
        )}
      </div>
    </div>
  );
};

export default ProductSlider;
