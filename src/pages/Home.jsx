import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import About from "../components/About";
import Selection from "../components/Selection";
import Footer from "../components/Footer";
import Loader from "./Loader";

import "./Home.css";
import ProductSlider from "../components/ProductSlider";
import { FooterLinks } from "../components/FooterLinks";

const Home = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    // Simulate loading process with setTimeout
    const loadingTimeout = setTimeout(() => {
      document.querySelector(".App").classList.add("translated"); // Add 'translated' class to App after 3000m
      setLoader(false);
    }, 7000);

    // Clear timeout on component unmount to avoid memory leaks
    return () => {
      clearTimeout(loadingTimeout);
    };
  }, [loader]);

  // Scroll to the top of the page whenever the component updates
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="App">
      <Loader />
      <div className="Home">
        <Header />
        <div className="content">
          <Banner />
          <About />
          <Selection />
          <ProductSlider />
          <FooterLinks />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
