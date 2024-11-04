import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import "./index.css";
import { useLocation, useNavigate } from "react-router-dom";
import main5 from "../../assets/main/main5.webp";
import main15 from "../../assets/main/main15.webp";
import main13 from "../../assets/main/main13.webp";
import main14 from "../../assets/main/main14.webp";
import main1 from "../../assets/main/main1.webp";

const bannerOptions = [
  {
    name: "Home",
    description:
      "Hundreds of choices filtered down for the best of the best. For the purest of dream, An intensity of comfort and beauty, and ultimate functionality for our customers’ luxury bathroom experience.",
    image: main5,
    color: "#7f4f24",
    id: 0,
  },
  {
    name: "Sofa",
    description:
      "Hundreds of choices filtered down for the best of the best. For the purest of dream, An intensity of comfort and beauty, and ultimate functionality for our customers’ luxury bathroom experience.",
    image: main13,
    color: "#936639",
    id: 23,
  },
  {
    name: "Chairs",
    description:
      "Hundreds of choices filtered down for the best of the best. For the purest of dream, An intensity of comfort and beauty, and ultimate functionality for our customers’ luxury bathroom experience.",
    image: main15,
    color: "#b6ad90",
    id: 61,
  },
  {
    name: "Tables",
    description:
      "Hundreds of choices filtered down for the best of the best. For the purest of dream, An intensity of comfort and beauty, and ultimate functionality for our customers’ luxury bathroom experience.",
    image: main14,
    color: "#656d4a",
    id: 17,
  },
  {
    name: "Outdoor",
    description:
      "Hundreds of choices filtered down for the best of the best. For the purest of dream, An intensity of comfort and beauty, and ultimate functionality for our customers’ luxury bathroom experience.",
    image: main1,
    color: "#333d29",
    id: 18,
  },
];

const Banner = () => {
  const [image, setImage] = useState(main15);
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const navigate = useNavigate();

  const handleMouseEnter = (index) => {
    setImage(bannerOptions[index].image);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setImage(main15);
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
          background: "rgb(65 61 61 / 23%)", // Adjust opacity here (0.5 for 50% opacity)
        }}
      >
        <p
          style={{
            fontFamily: "Lobster",
            position: "absolute",
            top: "50%",
            left: "50%",
            fontSize: "40px",
            transform: "translate(-50%,-50%)",
            zIndex: "100",
            color: "#5b838e",
          }}
        >
        </p>
      </div> */}
      <Box display="flex" width="100%" height="100vh">
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
              onClick={() => {
                if (option?.name?.toLowerCase() === "home") {
                  navigate("/home");
                } else if (option?.name?.toLowerCase() === "outdoor") {
                  navigate(`/${option?.name}_furniture`, {
                    state: {
                      id: option?.id,
                      name: `${option?.name}_furniture`,
                    },
                  });
                } else {
                  navigate(`/${option?.name}`, {
                    state: { id: option?.id, name: option?.name },
                  });
                }
              }}
            />
            <Typography
              className="banner-options"
              sx={{
                color: "#fcfcfc",
                position: "absolute",
                bottom: hoveredIndex === index ? "150px" : "80px",
                zIndex: 99999,
                textAlign: "center",
                left: "50%",
                fontFamily: "Brooklyn-Heavy",
                letterSpacing: "0px",
                transform: "translateX(-50%)",
                transition:
                  "bottom 0.5s ease-in-out, font-size 0.5s ease-in-out",
                width: "100%",
                fontOpticalSizing: "auto",
                fontSize: hoveredIndex === index ? "36px" : "32px",
                boxShadow: "-9px -1px #60494900",
                fontWeight: "600",
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
