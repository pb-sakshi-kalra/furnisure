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
              -aboutImageHeight * 0.3,
              bottomPosition - aboutImageHeight * 0.009
            );
          } else if (direction === "up") {
            bottomPosition = Math.min(
              aboutImageHeight * 0.3,
              bottomPosition + aboutImageHeight * 0.009
            );
          }
          secondImageRef.current.style.bottom =
            bottomPosition < -20 ? "-20px" : `${bottomPosition}px`;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <div className="about-container">
      <h3>ABOUT US</h3>
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
          <div className="des">
            <p>
              Welcome to FurniSure Rentals, the go-to furniture rental service
              in Dubai and the wider UAE! We're here to make furnishing your
              space easy, affordable, and stylish. Whether you need office
              furniture in Dubai for your workplace or home furniture for a cozy
              living space, we've got a fantastic range of high-quality options
              available for long-term rentals—from 3 months to over a year.
            </p>
            <p>
              But that's not all! If you're planning a spectacular event, our
              extensive selection of rental furniture is just what you need to
              impress your guests without breaking the bank. From corporate
              events to weddings, we provide elegant and comfortable furniture
              that will make your occasion truly unforgettable.
            </p>
            <p>
              Why choose FurniSure Rentals? It's simple: we offer top-notch
              furniture at a fraction of the cost, so you don't have to
              compromise on quality or comfort. Plus, our friendly and flexible
              service ensures you get exactly what you need, when you need it.
            </p>
            <p>
              Join the many satisfied customers who have transformed their
              spaces with FurniSure Rentals. Let us take care of the furniture,
              so you can focus on what really matters—creating beautiful,
              functional environments that you'll love.
            </p>
            <h6>
              Explore our range today and see why we're the leading choice for
              furniture rental in Dubai!
            </h6>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default About;
