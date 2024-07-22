// AboutIndex.jsx
import React, { useState, useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import "./index.css";
import couch from "../../assets/couch.jpg";
import lamp from "../../assets/lamp.jpg";

const About = () => {
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);
  const [direction, setDirection] = useState(null);
  const aboutImageRef = useRef(null);
  const secondImageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentValue = window.scrollY;
      const previousValue = scrollPosition;
      setScrollPosition(currentValue);
      if (currentValue > previousValue) {
        setDirection("down");
      } else {
        setDirection("up");
      }
      const aboutDiv = aboutImageRef.current;
      const aboutDivTop = aboutDiv.offsetTop;
      const aboutDivHeight = aboutDiv.offsetHeight;
      const windowHeight = window.innerHeight;
      if (
        scrollPosition + windowHeight >= aboutDivTop &&
        scrollPosition <= aboutDivTop + aboutDivHeight
      ) {
        if (aboutImageRef.current && secondImageRef.current) {
          const aboutImageHeight = aboutImageRef.current.offsetHeight;
          const secondImageHeight = secondImageRef.current.offsetHeight;
          let bottomPosition = parseInt(secondImageRef.current.style.bottom);
          if (direction === "down") {
            bottomPosition = Math.max(
              -aboutImageHeight * 0.1,
              bottomPosition - aboutImageHeight * 0.008
            );
          } else if (direction === "up") {
            bottomPosition = Math.min(
              aboutImageHeight * 0.1,
              bottomPosition + aboutImageHeight * 0.008
            );
          }
          secondImageRef.current.style.bottom = `${bottomPosition}px`;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <div className="about">
      <Box ref={aboutImageRef} className="about-image">
        <img className="first-image" src={couch} />
        <Box
          ref={secondImageRef}
          className="second-image"
          style={{ bottom: 0 }}
        >
          <img src={lamp} />
        </Box>
      </Box>
      <Box className="about-description">
        <Typography variant="h3">
          WELCOME TO OUR FURNITURE SHOP, WHERE TIMELESS AND STYLISH DESIGNS MEET
          STORYTELLING.
        </Typography>
        <Typography classname="para" variant="p">
          Every piece of furniture in our collection tells a personal story.
          Custom-designed and personalized to enhance your home's aesthetics.
        </Typography>
      </Box>
    </div>
  );
};

export default About;
