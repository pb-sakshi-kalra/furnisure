import React from "react";
import "./index.css";

const MasonryGrid = ({ products }) => {

  return (
    <div style={{ marginBottom: "100px" }}>
      <h3 style={{ marginTop: "50px" }}>Latest Products</h3>
      <div
        className="masonry-grid"
      >
        {products?.map((item, index) => (
          <div className="masonry-item" key={index}>
            <img
              src={item.images[1] ? item.images[1]?.src : item?.images[0]?.src}
              alt={item?.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasonryGrid;
