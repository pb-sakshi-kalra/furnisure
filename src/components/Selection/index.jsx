import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./index.css";
import lamp from "../../assets/lamp.jpg";
import oramgewithlamp from "../../assets/oramgewithlamp.jpg";

const Selection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <>
      <h4 className="heading">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam omnis
        eum saepe reiciendis? Nihil a velit necessitatibus earum sunt numquam.
      </h4>
      <div className="scroll-container">
        <AnimatePresence mode="wait">
          <motion.div
            ref={containerRef}
            className={`image-container ${isVisible ? "active" : ""}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} // Opposite direction on exit
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <motion.img
              src={lamp}
              alt="Image 1"
              className="scroll-image"
              initial={{ opacity: 0, x: -700 }}
              animate={{ opacity: 1, x: isVisible ? 0 : -700 }}
              exit={{ opacity: 0, x: isVisible ? 700 : -700 }} // Opposite direction on exit
              transition={{ duration: 1, ease: "easeInOut" }}
            />
            <motion.img
              src={oramgewithlamp}
              alt="Image 2"
              className="scroll-image"
              initial={{ opacity: 0, x: 700 }}
              animate={{ opacity: 1, x: isVisible ? 0 : 700 }}
              exit={{ opacity: 0, x: isVisible ? -700 : 700 }} // Opposite direction on exit
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default Selection;
