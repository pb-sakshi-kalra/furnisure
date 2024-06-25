import React from "react";
import "./index.css"; // Import your CSS file for styling

const ProductDisplay = () => {
  return (
    <div className="horizontal-scroll-container">
      <div className="content">
        {/* Content that will horizontally scroll */}
        <div className="item">Item 1</div>
        <div className="item">Item 2</div>
        <div className="item">Item 3</div>
        <div className="item">Item 4</div>
        {/* Add more items as needed */}
      </div>
    </div>
  );
};

export default ProductDisplay;
