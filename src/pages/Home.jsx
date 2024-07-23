import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import About from "../components/About";
import Selection from "../components/Selection";
import Footer from "../components/Footer";
import Slider from "./components/Sliders";
import Subscribe from "../components/Subscribe";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <div className="content">
        <Banner />
        <Selection />
        <About />
        <Subscribe />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
