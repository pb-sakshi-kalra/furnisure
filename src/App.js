import React from "react";
import "./App.css";
import "react-horizontal-vertical/rhv.css";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Category from "./services/category";
import Home from "./pages/Home";
import Event from "./pages/Event";
import Category from "./pages/Category";
import ProductDetail from "./components/ProductDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
