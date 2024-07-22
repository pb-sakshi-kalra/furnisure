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
    <div className="scroll-container">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sint
        odio explicabo sequi? Iusto corporis ea illo? Culpa explicabo aperiam
        quia hic delectus a neque! Fugiat perspiciatis rem quas nostrum
        laboriosam deleniti asperiores explicabo eos aliquam voluptatibus
        consequatur consequuntur, corporis aliquid sequi aperiam illum a amet
        voluptatem. Quibusdam, saepe corrupti sunt modi aspernatur commodi!
        Sequi, quibusdam impedit? Est sint, eos expedita quo ea molestiae
        voluptate blanditiis consectetur similique nihil labore? Asperiores
        aperiam incidunt debitis qui nisi temporibus, voluptas quae, quasi
        consequuntur dolores illo!
      </p>
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
  );
};

export default Selection;
