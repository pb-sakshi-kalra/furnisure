import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import banner4 from "../../assets/banner4.jpg";
import banner5 from "../../assets/banner5.jpg";
import banner6 from "../../assets/banner6.jpg";
import banner7 from "../../assets/banner7.jpg";
import banner8 from "../../assets/banner8.jpg";
import banner9 from "../../assets/banner9.jpg";
import banner10 from "../../assets/banner10.jpg";
import banner11 from "../../assets/banner11.jpg";
import banner12 from "../../assets/banner12.jpg";
import banner13 from "../../assets/banner13.jpg";
import banner14 from "../../assets/banner14.jpg";
import banner15 from "../../assets/banner15.jpg";
import banner16 from "../../assets/banner16.jpg";
import banner17 from "../../assets/banner17.jpg";
import banner19 from "../../assets/banner19.jpg";

const LoaderImages = () => {
  const [images, setImages] = useState([
    {
      image: banner13,
      top: "40%",
      left: "80%",
      height: "430px",
      width: "400px",
    },
    {
      image: banner10,
      top: "32%",
      left: "0%",
      height: "400px",
      width: "300px",
    },
    {
      image: banner5,
      top: "0%",
      left: "38%",
      height: "350px",
      width: "300px",
    },
    {
      image: banner15,
      top: "22%",
      left: "28%",
      height: "450px",
      width: "400px",
    },
    {
      image: banner17,
      top: "60%",
      left: "40%",
      height: "450px",
      width: "400px",
    },
    {
      image: banner3,
      top: "70%",
      left: "80%",
      height: "400px",
      width: "400px",
    },
    {
      image: banner6,
      top: "30%",
      left: "14%",
      height: "400px",
      width: "300px",
    },
    {
      image: banner19,
      top: "0%",
      left: "50%",
      height: "400px",
      width: "350px",
    },
    {
      image: banner1,
      top: "65%",
      left: "0%",
      height: "400px",
      width: "300px",
    },
    {
      image: banner12,
      top: "0%",
      left: "80%",
      height: "450px",
      width: "400px",
    },
    {
      image: banner9,
      top: "62%",
      left: "25%",
      height: "450px",
      width: "300px",
    },
    {
      image: banner2,
      top: "60%",
      left: "60%",
      height: "450px",
      width: "400px",
    },
    {
      image: banner4,
      top: "30%",
      left: "40%",
      height: "450px",
      width: "400px",
    },
    {
      image: banner11,
      top: "0%",
      left: "18%",
      height: "400px",
      width: "400px",
    },
    {
      image: banner7,
      top: "0%",
      left: "0%",
      height: "350px",
      width: "350px",
    },
    {
      image: banner14,
      top: "67%",
      left: "15%",
      height: "370px",
      width: "300px",
    },
    {
      image: banner8,
      top: "30%",
      left: "60%",
      height: "400px",
      width: "400px",
    },
    {
      image: banner16,
      top: "0%",
      left: "60%",
      height: "400px",
      width: "400px",
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
