import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import About from "../components/About";
import Selection from "../components/Selection";
import Footer from "../components/Footer";
import "./Home.css";
import ProductSlider from "../components/ProductSlider";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <div className="content">
        <Banner />
        <About />
        <Selection />
        <ProductSlider />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
