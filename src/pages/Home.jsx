import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation for route handling
import Header from "../components/Header";
import Banner from "../components/Banner";
import About from "../components/About";
import Selection from "../components/Selection";
import Footer from "../components/Footer";
import "./Home.css";
import ProductSlider from "../components/ProductSlider";
import Loader from "./Loader";

const Home = () => {
  const [loader, setLoader] = useState(true);
  const location = useLocation(); // Get the current location

  useEffect(() => {
    // Simulate loading process with setTimeout
    const loadingTimeout = setTimeout(() => {
      document.querySelector(".App").classList.add("translated"); // Add 'translated' class to App after 7000ms
      setLoader(false);
    }, 7000);

    // Clear timeout on component unmount to avoid memory leaks
    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  useEffect(() => {
    if (!loader) {
      // Calculate and set the max-height of the root container whenever the route is '/'
      if (location.pathname === "/") {
        const homeElement = document.querySelector(".Home");
        const rootElement = document.querySelector("#root"); // Target the root container
        const viewportHeight = window.innerHeight; // Get the viewport height
        if (homeElement && rootElement) {
          const homeHeight = homeElement.offsetHeight;
          rootElement.style.maxHeight = `${homeHeight}px`; // Set max-height of root container
          rootElement.style.overflow = "hidden"; // Prevent scrolling
        }
      }
    }

    // Clean up by resetting root style on unmount or route change
    return () => {
      const rootElement = document.querySelector("#root");
      if (rootElement) {
        rootElement.style.maxHeight = "";
        rootElement.style.overflow = "";
      }
    };
  }, [loader, location.pathname]); // Depend on `loader` and `location.pathname` to recalculate height when route changes

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
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
