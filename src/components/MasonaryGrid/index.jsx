import React from "react";
import Masonry from "react-masonry-css";
import "./index.css";

const MasonryGrid = ({ products }) => {
  const breakpoints = {
    default: 8,
    1100: 4,
    700: 1,
  };

  return (
    <div style={{ marginBottom: "100px" }}>
      <h3 style={{ marginTop: "50px" }}>Latest Products</h3>
      <Masonry
        breakpointCols={breakpoints}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {products?.map((item, index) => (
          <div className="masonry-item" key={index}>
            <img
              src={item.images[1] ? item.images[1]?.src : item?.images[0]?.src}
              alt={item?.name}
            />
            {/* <h3 className="masonry-height">{item?.name}</h3> */}
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default MasonryGrid;
