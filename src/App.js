import React, { useEffect } from "react";
import "./App.css";
import "react-horizontal-vertical/rhv.css";

import Home from "./pages/Home";
import Loader from "./pages/Loader";

function App() {
  useEffect(() => {
    // Simulate loading process with setTimeout
    const loadingTimeout = setTimeout(() => {
      document.querySelector(".App").classList.add("translated"); // Add 'translated' class to App after 3000ms
      document.body.classList.add("translated"); // Add 'translated' class to body after 3000ms
    }, 5000);

    // Clear timeout on component unmount to avoid memory leaks
    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  // Scroll to the top of the page whenever the component updates
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <Loader />
      <Home />
      <div className="remove-tansform"></div>
    </div>
  );
}

export default App;
