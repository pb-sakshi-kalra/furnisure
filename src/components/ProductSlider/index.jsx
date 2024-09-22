import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
import "./index.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
};

const categories = [
  "chairs",
  "arabic furniture",
  "coffee tables",
  "tables",
  "sofa",
  "outdoor furniture",
];

const ProductSlider = ({ product }) => {
  const navigate = useNavigate();

  const filteredProducts = product.filter((prod) =>
    categories.some((category) => prod?.name?.toLowerCase().includes(category))
  );

  return (
    <div className="parent-product">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        infinite={true}
        partialVisible={true}
        autoPlaySpeed={1000}
        dotListClass="custom-dot-list-style"
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((prod, index) => (
            <div
              className="slider"
              key={index}
              onClick={() =>
                navigate(`/category/${prod?.id}`, {
                  state: { name: prod?.name },
                })
              }
            >
              <img
                style={{ width: "40%" }}
                src={prod?.image?.src}
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
      </Carousel>
    </div>
  );
};

export default ProductSlider;
