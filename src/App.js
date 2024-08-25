import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Category from "./services/category";
import products from "./services/products";

import Home from "./pages/Home";
import Event from "./pages/Event";
import CategoryList from "./pages/Category";
import ProductDetail from "./components/ProductDetails";
import ScrollToTop from "./pages/ScrollToTop";

function App() {
  // useEffect(() => {
  //   products.get();
  //   Category.getSubcategory(17);
  // }, []);

  return (
    <div>
        <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
        <Route path="/category/:id" element={<CategoryList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
