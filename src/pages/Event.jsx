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
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    Category.get().then((res) => {
      console.log(res.headers.get("X-WP-Total"));
      setCategories(
        res?.data?.filter((cate) => cate?.display !== "subcategories")
      );
      setAllCategories(res?.data);
    });
  }, []);

  return (
    <div className="event-page">
      <EventHeader categories={allCategories} />
      <EventBanner />
      <CategoryGrid categories={categories} />
      <ImageMasonry />
      <Footer />
    </div>
  );
};

export default Event;
