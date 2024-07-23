import React from "react";
import "./index.css";

const Subscribe = () => {
  return (
    <div className="parallax-background">
      <div className="form-container">
        <h2>Subscribe</h2>
        <form>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
