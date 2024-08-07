// AboutIndex.jsx
import React, { useState, useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import "./index.css";
import banner14 from "../../assets/banner14.jpg";
import banner16 from "../../assets/banner16.jpg";

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
              -aboutImageHeight * 0.5,
              bottomPosition - aboutImageHeight * 0.008
            );
          } else if (direction === "up") {
            bottomPosition = Math.min(
              aboutImageHeight * 0.5,
              bottomPosition + aboutImageHeight * 0.008
            );
          }
          secondImageRef.current.style.bottom =
            bottomPosition < -70 ? "-70px" : `${bottomPosition}px`;
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
        <img className="first-image" src={banner14} />
        <Box
          ref={secondImageRef}
          className="second-image"
          style={{ bottom: "300px" }}
        >
          <img src={banner16} />
        </Box>
      </Box>
      <Box className="about-description">
        <h3>ABOUT US!</h3>
        <p className="para">
          Welcome to FurniSure Rentals, your go-to for stylish and affordable
          furniture rentals in Dubai and the UAE! Whether you're setting up a
          cozy home or a professional office, our top-quality, long-term rental
          options make it easy and budget-friendly. Planning an event? We’ve got
          you covered with elegant furniture that will wow your guests without
          breaking the bank. From corporate events to weddings, our wide
          selection ensures every occasion is special. Discover why so many
          choose FurniSure Rentals for their furniture needs. Quality, comfort,
          and unbeatable service—let's transform your space together!
        </p>
      </Box>
    </div>
  );
};

export default About;
