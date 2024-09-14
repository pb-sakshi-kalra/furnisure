import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import loader1 from "../../assets/loader/loader1.jpg";
import loader2 from "../../assets/loader/loader2.jpg";
import loader3 from "../../assets/loader/loader3.jpg";
import loader4 from "../../assets/loader/loader4.jpg";
import loader5 from "../../assets/loader/loader5.jpg";
import loader6 from "../../assets/loader/loader6.jpg";
import loader7 from "../../assets/loader/loader7.jpg";
import loader8 from "../../assets/loader/loader8.jpg";
import loader9 from "../../assets/loader/loader9.jpg";
import loader10 from "../../assets/loader/loader10.jpg";
import loader11 from "../../assets/loader/loader11.jpg";
import loader12 from "../../assets/loader/loader12.jpg";
import loader13 from "../../assets/loader/loader13.jpg";
import loader14 from "../../assets/loader/loader14.jpg";
import loader15 from "../../assets/loader/loader15.jpg";
import loader16 from "../../assets/loader/loader16.jpg";
import loader17 from "../../assets/loader/loader17.jpg";
import loader19 from "../../assets/loader/loader19.jpg";

const LoaderImages = () => {
  const [images, setImages] = useState([
    {
      image: loader13,
      top: "40%",
      left: "80%",
      height: "480px",
      width: "450px",
    },
    {
      image: loader10,
      top: "32%",
      left: "0%",
      height: "450px",
      width: "350px",
    },
    {
      image: loader5,
      top: "0%",
      left: "38%",
      height: "400px",
      width: "350px",
    },
    {
      image: loader15,
      top: "22%",
      left: "28%",
      height: "500px",
      width: "450px",
    },
    {
      image: loader17,
      top: "60%",
      left: "40%",
      height: "500px",
      width: "450px",
    },
    {
      image: loader3,
      top: "70%",
      left: "80%",
      height: "450px",
      width: "450px",
    },
    {
      image: loader6,
      top: "30%",
      left: "14%",
      height: "450px",
      width: "350px",
    },
    {
      image: loader19,
      top: "0%",
      left: "50%",
      height: "450px",
      width: "400px",
    },
    {
      image: loader1,
      top: "65%",
      left: "0%",
      height: "450px",
      width: "350px",
    },
    {
      image: loader12,
      top: "0%",
      left: "80%",
      height: "500px",
      width: "450px",
    },
    {
      image: loader9,
      top: "62%",
      left: "25%",
      height: "500px",
      width: "350px",
    },
    {
      image: loader2,
      top: "60%",
      left: "60%",
      height: "500px",
      width: "450px",
    },
    {
      image: loader4,
      top: "30%",
      left: "40%",
      height: "500px",
      width: "450px",
    },
    {
      image: loader11,
      top: "0%",
      left: "18%",
      height: "450px",
      width: "450px",
    },
    {
      image: loader7,
      top: "0%",
      left: "0%",
      height: "400px",
      width: "400px",
    },
    {
      image: loader14,
      top: "67%",
      left: "15%",
      height: "420px",
      width: "350px",
    },
    {
      image: loader8,
      top: "30%",
      left: "60%",
      height: "450px",
      width: "450px",
    },
    {
      image: loader16,
      top: "0%",
      left: "60%",
      height: "450px",
      width: "450px",
    },
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setImages((prevImages) => {
        const nextIndex = prevImages.findIndex((img) => !img.isVisible);
        if (nextIndex !== -1) {
          const updatedImages = [...prevImages];
          updatedImages[nextIndex].isVisible = true;
          return updatedImages;
        }
        clearInterval(timer);
        return prevImages;
      });
    }, 300);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {images?.map(
        (pos, index) =>
          pos.isVisible && (
            <motion.img
              key={index}
              src={pos.image}
              alt={`Loader Image ${index}`}
              style={{
                position: "absolute",
                top: pos.top,
                left: pos.left,
                height: pos.height,
                width: pos.width,
              }}
              className={`image-${index + 1}`} // Adding a class for styling
              initial={{ scale: 0.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, type: "easeInOut" }}
            />
          )
      )}
    </>
  );
};

export default LoaderImages;
