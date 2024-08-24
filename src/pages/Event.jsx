import React from "react";
import CategoryGrid from "../components/CategoryGrid";
import { EventBanner } from "../components/EventBanner";
import Footer from "../components/Footer";
import "./Home.css";
import EventHeader from "../components/EventHeader";
import ImageMasonry from "../components/ImageMasonry";

const Event = () => {
  return (
    <div className="event-page">
      <EventHeader />
      <EventBanner />
      <CategoryGrid />
      <ImageMasonry />
      <Footer />
    </div>
  );
};

export default Event;
