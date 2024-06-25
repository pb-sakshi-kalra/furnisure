import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import "./index.css";
import cafe from "../../assets/cafe.jpg";
import table from "../../assets/table.jpg";
import staircase from "../../assets/staircase.jpg";
import office from "../../assets/office.jpg";
import olive from "../../assets/olive.jpg";

const bannerOptions = [
  {
    name: "Cafe",
    description:
      "Hundreds of choices filtered down for the best of the best. For the purest of dream, An intensity of comfort and beauty, and ultimate functionality for our customers’ luxury bathroom experience.",
    image: cafe,
    color: "#2b616a",
  },
  {
    name: "Table",
    description:
      "Hundreds of choices filtered down for the best of the best. For the purest of dream, An intensity of comfort and beauty, and ultimate functionality for our customers’ luxury bathroom experience.",
    image: table,
    color: "#661e22",
  },
  {
    name: "Staircase",
    description:
      "Hundreds of choices filtered down for the best of the best. For the purest of dream, An intensity of comfort and beauty, and ultimate functionality for our customers’ luxury bathroom experience.",
    image: staircase,
    color: "#3b27a1",
  },
  {
    name: "Office",
    description:
      "Hundreds of choices filtered down for the best of the best. For the purest of dream, An intensity of comfort and beauty, and ultimate functionality for our customers’ luxury bathroom experience.",
    image: office,
    color: "#f04f20",
  },
  {
    name: "Olive",
    description:
      "Hundreds of choices filtered down for the best of the best. For the purest of dream, An intensity of comfort and beauty, and ultimate functionality for our customers’ luxury bathroom experience.",
    image: olive,
    color: "#d21e5c",
  },
];

const Banner = () => {
  const [image, setImage] = useState(olive);
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "400px",
      }}
    >
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
              width: ` ${100 / bannerOptions.length}%`,
              cursor: "pointer",
              textAlign: "center",
              position: "relative",
            }}
          >
            <Box
              sx={{
                background: option?.color,
                height: hoveredIndex === index ? "100vh" : "10px",
                transition:
                  "height 1s ease-in-out, background 0.5s ease-in-out",
                position: "absolute",
                width: "100%",
                bottom: 0,
              }}
              onMouseEnter={() => {
                setImage(option.image);
                setHoveredIndex(index);
              }}
              onMouseLeave={() => {
                if (hoveredIndex === index) {
                  setImage(olive);
                  setHoveredIndex(-1);
                }
              }}
            >
              <Typography
                className="banner-options"
                sx={{
                  color: "whitesmoke",
                  position: "absolute",
                  bottom: hoveredIndex === index ? "150px" : "20px",
                  zIndex: 99999,
                  textAlign: "center",
                  left: "50%",
                  transform: "translateX(-50%)",
                  transition: "bottom 0.5s ease-in-out",
                  width: "100%",
                  fontFamily: "Playwrite AU TAS, cursive",
                  fontOpticalSizing: "auto",
                  fontSize: "18px",
                  fontWeight: "400",
                }}
              >
                {option?.name}
              </Typography>
              <Typography sx={{ display: "none" }}>
                {option?.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default Banner;
