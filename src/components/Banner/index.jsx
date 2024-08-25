import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import "./index.css";
import home1 from "../../assets/home1.webp";
import main12 from "../../assets/main/main12.jpg";
import main13 from "../../assets/main/main13.jpg";
import main14 from "../../assets/main/main14.jpg";
import main18 from "../../assets/main/main18.jpg";

const bannerOptions = [
  {
    name: "Home",
    description:
      "Hundreds of choices filtered down for the best of the best. For the purest of dream, An intensity of comfort and beauty, and ultimate functionality for our customers’ luxury bathroom experience.",
    image: home1,
    color: "#8f87d1",
  },
  {
    name: "Sofa",
    description:
      "Hundreds of choices filtered down for the best of the best. For the purest of dream, An intensity of comfort and beauty, and ultimate functionality for our customers’ luxury bathroom experience.",
    image: main13,
    color: "#bd983e",
  },
  {
    name: "Events",
    description:
      "Hundreds of choices filtered down for the best of the best. For the purest of dream, An intensity of comfort and beauty, and ultimate functionality for our customers’ luxury bathroom experience.",
    image: main12,
    color: "#b6a7b6",
  },
  {
    name: "Lamp",
    description:
      "Hundreds of choices filtered down for the best of the best. For the purest of dream, An intensity of comfort and beauty, and ultimate functionality for our customers’ luxury bathroom experience.",
    image: main14,
    color: "#3c5080",
  },
  {
    name: "Sitting",
    description:
      "Hundreds of choices filtered down for the best of the best. For the purest of dream, An intensity of comfort and beauty, and ultimate functionality for our customers’ luxury bathroom experience.",
    image: main18,
    color: "#d28c64",
  },
];

const Banner = () => {
  const [image, setImage] = useState(main12);
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setImage(bannerOptions[index].image);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setImage(main12);
    setHoveredIndex(-1);
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
      {/* <div
        className="banner-overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgb(17 17 17 / 23%)", // Adjust opacity here (0.5 for 50% opacity)
        }}
      ></div> */}
      <Box
        display="flex"
        width="100%"
        height="100vh"
        sx={{ padding: "0px 100px" }}
      >
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
              initial={{ height: "10px", background: option.color }}
              animate={{
                height: hoveredIndex === index ? "100vh" : "10px",
              }}
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
                color: "#fefedf",
                position: "absolute",
                bottom: hoveredIndex === index ? "150px" : "80px",
                zIndex: 99999,
                textAlign: "center",
                left: "50%",
                transform: "translateX(-50%)",
                transition:
                  "bottom 0.5s ease-in-out, font-size 0.5s ease-in-out",
                width: "100%",
                fontFamily: "Brooklyn-Heavy",
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
      </Box>
    </div>
  );
};

export default Banner;
