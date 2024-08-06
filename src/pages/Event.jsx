import React from "react";
import CategoryGrid from "../components/CategoryGrid";
import EventBanner from "../components/EventBanner";
import ProductList from "../components/ProductList";
import ProductDetail from "../components/ProductDetails";
import Footer from "../components/Footer";
import "./Home.css";

const Event = () => {
  return (
    <div className="event-page">
      <EventBanner />
      <CategoryGrid />
      <Footer />
    </div>
  );
};

export default Event;
