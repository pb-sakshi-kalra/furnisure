import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion, AnimatePresence, useAnimation } from "framer-motion"; // Import motion components from Framer Motion
import "./index.css";
import yellowsofa from "../../assets/yellowsofa.jpg";
import purple from "../../assets/purple.jpg";
import weirdpainting from "../../assets/weirdpainting.jpg";
import orangeblue from "../../assets/orangeblue.jpg";
import grey from "../../assets/grey.jpg";

const bannerOptions = [
  {
    name: "Home",
    description:
      "Hundreds of choices filtered down for the best of the best. For the purest of dream, An intensity of comfort and beauty, and ultimate functionality for our customers’ luxury bathroom experience.",
    image: purple,
    color: "#f7bf9e",
  },
  {
    name: "Sofa",
    description:
      "Hundreds of choices filtered down for the best of the best. For the purest of dream, An intensity of comfort and beauty, and ultimate functionality for our customers’ luxury bathroom experience.",
    image: weirdpainting,
    color: "#585123",
  },
  {
    name: "Sitting Chairs",
    description:
      "Hundreds of choices filtered down for the best of the best. For the purest of dream, An intensity of comfort and beauty, and ultimate functionality for our customers’ luxury bathroom experience.",
    image: orangeblue,
    color: "#5a2a27",
  },
  {
    name: "Lamp",
    description:
      "Hundreds of choices filtered down for the best of the best. For the purest of dream, An intensity of comfort and beauty, and ultimate functionality for our customers’ luxury bathroom experience.",
    image: yellowsofa,
    color: "#cc8b86",
  },
  {
    name: "Sitting",
    description:
      "Hundreds of choices filtered down for the best of the best. For the purest of dream, An intensity of comfort and beauty, and ultimate functionality for our customers’ luxury bathroom experience.",
    image: grey,
    color: "#772f1a",
  },
];

const Banner = () => {
  const [image, setImage] = useState(yellowsofa);
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const controls = useAnimation();

  const handleMouseEnter = (index) => {
    setImage(bannerOptions[index].image);
    setHoveredIndex(index);
    controls.start({
      height: "100vh",
      transition: { duration: 0.5, ease: "easeInOut" },
    });
  };

  const handleMouseLeave = () => {
    setImage(yellowsofa);
    setHoveredIndex(-1);
    controls.start({
      height: "10px",
      transition: { duration: 0.5, ease: "easeInOut" },
    });
  };

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        position: "relative",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div
        className="banner-overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgb(0 0 0 / 16%);", // Adjust opacity here (0.5 for 50% opacity)
        }}
      ></div>
      <Box
        display="flex"
        width="100%"
        height="100vh"
        sx={{ padding: "0px 100px" }}
      >
        <AnimatePresence>
          {bannerOptions.map((option, index) => (
            <Box
              key={index}
              sx={{
                width: `${100 / bannerOptions.length}%`,
                cursor: "pointer",
                textAlign: "center",
                position: "relative",
              }}
            >
              <motion.div
                layout
                initial={{ height: "10px", background: option.color }}
                animate={
                  hoveredIndex === index
                    ? { height: "100vh" }
                    : { height: "10px" }
                }
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  width: "100%",
                  bottom: 0,
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              />
              <Typography
                className="banner-options"
                sx={{
                  color: "whitesmoke",
                  position: "absolute",
                  bottom: hoveredIndex === index ? "150px" : "80px",
                  zIndex: 99999,
                  textAlign: "center",
                  left: "50%",
                  transform: "translateX(-50%)",
                  transition:
                    "bottom 0.5s ease-in-out, font-size 0.5s ease-in-out",
                  width: "100%",
                  fontFamily: "Playfair Display, serif",
                  fontOpticalSizing: "auto",
                  fontSize: hoveredIndex === index ? "30px" : "24px",
                  boxShadow: "-9px -1px #60494900",
                  fontWeight: "600",
                  letterSpacing: "2px",
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {option.name}
              </Typography>
              <Typography sx={{ display: "none" }}>
                {option.description}
              </Typography>
            </Box>
          ))}
        </AnimatePresence>
      </Box>
    </div>
  );
};

export default Banner;
