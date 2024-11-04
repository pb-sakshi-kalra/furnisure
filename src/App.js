import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Event from "./pages/Event";
import CategoryList from "./pages/Category";
import ProductDetail from "./components/ProductDetails";
import ScrollToTop from "./pages/ScrollToTop";
import HomeEvent from "./pages/HomeEvent";

function App() {
  return (
    <div>
        <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
        <Route path="/home" element={<HomeEvent />} />
        <Route path="/:categoryName" element={<CategoryList />} />
        <Route path="/:categoryName/:subCategoryName" element={<CategoryList />} />
        <Route path="/:categoryName/:subCategoryName/:productName/:id" element={<ProductDetail />} />
        <Route path="/:categoryName/:productName/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
