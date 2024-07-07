import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Products from "./services/products";
import "./App.css";

import Home from "./pages/Home";
import Loader from "./pages/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulating 1 second loading time
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // Products.post(data)
      // Simulate fetching data or any asynchronous operation
      Products.get().then((res) => {
        console.log(res);
      }).catch((error)=>{
        console.log("error====>", error)
      });
    }
  }, [isLoading]);

  // Motion variants for loader animations
  const loaderVariants = {
    initial: {
      opacity: 1,
      y: 0,
    },
    exit: {
      y: -500,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  // Motion variants for page animations
  const pageVariants = {
    initial: {
      opacity: 1,
      y: -100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      y: -100,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            key="loader-route"
            path="/"
            element={
              <AnimatePresence mode="wait">
                {isLoading ? (
                  <motion.div
                    key="loader"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={loaderVariants}
                  >
                    <Loader />
                  </motion.div>
                ) : (
                  <Navigate key="navigate-home" to="/home" />
                )}
              </AnimatePresence>
            }
          />
          <Route
            key="home-route"
            path="/home"
            element={
              <AnimatePresence>
                <motion.div
                  key="homeContent"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageVariants}
                >
                  <Home />
                </motion.div>
              </AnimatePresence>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
