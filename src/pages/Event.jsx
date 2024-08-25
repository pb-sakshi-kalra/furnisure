import React, { useEffect, useState } from "react";
import CategoryGrid from "../components/CategoryGrid";
import Category from "../services/category";
import { EventBanner } from "../components/EventBanner";
import Footer from "../components/Footer";
import "./Home.css";
import EventHeader from "../components/EventHeader";
import ImageMasonry from "../components/ImageMasonry";

const Event = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    Category.get().then((res) =>
      setCategories(
        res?.data?.filter((cate) => cate?.display !== "subcategories")
      )
    );
  }, []);

  return (
    <div className="event-page">
      <EventHeader />
      <EventBanner />
      <CategoryGrid categories={categories} />
      <ImageMasonry />
      <Footer />
    </div>
  );
};

export default Event;
