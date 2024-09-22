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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Category.get().then((res) => {
      console.log(res.headers.get("X-WP-Total"));
      setCategories(
        res?.data?.filter((cate) => cate?.display !== "subcategories")
      );
      setAllCategories(res?.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="event-page">
      <EventHeader categories={allCategories} />
      <EventBanner />
      {categories?.length > 0 ? (
        <CategoryGrid loading={loading} categories={categories} />
      ) : (
        "Loading"
      )}
      <ImageMasonry />
      <Footer />
    </div>
  );
};

export default Event;
