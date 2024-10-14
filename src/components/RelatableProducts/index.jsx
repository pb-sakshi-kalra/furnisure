import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
import "./index.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
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

const RelatableProducts = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={false}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {product.map((prod, index) => {
          return (
            <div
              className="slider"
              key={index}
              onClick={() => {
                window.location.reload();
                navigate(`/product/${prod?.id}`);
                window.location.reload();
              }}
            >
              <img
                src={
                  prod?.images[1] ? prod?.images[1]?.src : prod?.images[0]?.src
                }
                alt="movie"
              />
              <div className="slider-des">
                <p>{prod?.name}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default RelatableProducts;
