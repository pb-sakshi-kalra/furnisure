import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./index.css";
import main12 from "../../assets/main/main12.jpg";
import main9 from "../../assets/main/main9.jpg";

const Selection = () => {
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasBeenVisible(true);
          }
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
    <div className="selection-heading">
      <h3>Select your style!</h3>
      <h4 className="heading">
        Thinking about hosting an event or refreshing your home or office space?
        We've got you covered! Check out our event furniture to add that special
        touch to your gatherings, or browse our home and office collections for
        long-term comfort. Just click through to find what suits you best!
      </h4>
      <div className="scroll-container">
        <div ref={containerRef}>
          <AnimatePresence>
            {hasBeenVisible && (
              <motion.div
                className="image-container active"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <div className="selection-home">
                  <h1>Home</h1>
                </div>
                <motion.img
                  src={main12}
                  alt="Image 1"
                  className="scroll-image"
                  initial={{ opacity: 0, x: -700 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                ></motion.img>

                <motion.img
                  src={main9}
                  alt="Image 2"
                  className="scroll-image"
                  initial={{ opacity: 0, x: 700 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                <div
                  onClick={() => navigate("/event")}
                  className="selection-event"
                >
                  <h1>Event</h1>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Selection;
