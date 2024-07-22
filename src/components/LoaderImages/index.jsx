import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import wierdsofa from "../../assets/wierdsofa.jpg";
import wierdmirror from "../../assets/wierdmirror.jpg";
import greenandwhite from "../../assets/greenandwhite.jpg";
import hugelivingroom from "../../assets/hugelivingroom.jpg";
import julabohemian from "../../assets/julabohemian.jpg";
import orangespread from "../../assets/orangespread.jpg";
import jjhula from "../../assets/jjhula.jpg";
import brownbed from "../../assets/brownbed.jpg";
import chand from "../../assets/chand.jpg";
import boho from "../../assets/boho.jpg";
import mooncouch from "../../assets/mooncouch.jpg";
import poolhouse from "../../assets/poolhouse.jpg";
import greenmirror from "../../assets/greenmirror.jpg";
import orangesabkuch from "../../assets/orangesabkuch.jpg";
import singlesofa from "../../assets/singlesofa.jpg";

const LoaderImages = () => {
  const [images, setImages] = useState([
    {
      image: wierdsofa,
      top: "55%",
      left: "0%",
      height: "500px",
      width: "400px",
    },
    {
      image: julabohemian,
      top: "0%",
      left: "38%",
      height: "500px",
      width: "500px",
    },
    {
      image: wierdmirror,
      top: "40%",
      left: "60%",
      height: "450px",
      width: "450px",
    },
    {
      image: jjhula,
      top: "0%",
      left: "0%",
      height: "400px",
      width: "400px",
    },
    {
      image: orangespread,
      top: "30%",
      left: "13%",
      height: "500px",
      width: "400px",
    },
    {
      image: greenandwhite,
      top: "42%",
      left: "80%",
      height: "600px",
      width: "400px",
    },
    {
      image: hugelivingroom,
      top: "60%",
      left: "45%",
      height: "500px",
      width: "400px",
    },
    {
      image: poolhouse,
      top: "0%",
      left: "80%",
      height: "450px",
      width: "450px",
    },
    {
      image: mooncouch,
      top: "0%",
      left: "18%",
      height: "500px",
      width: "450px",
    },
    {
      image: brownbed,
      top: "0%",
      left: "60%",
      height: "450px",
      width: "450px",
    },
    {
      image: chand,
      top: "45%",
      left: "30%",
      height: "600px",
      width: "400px",
    },
    {
      image: boho,
      top: "38%",
      left: "0%",
      height: "400px",
      width: "300px",
    },
    {
      image: greenmirror,
      top: "40%",
      left: "48%",
      height: "400px",
      width: "300px",
    },
    {
      image: orangesabkuch,
      top: "65%",
      left: "63%",
      height: "400px",
      width: "400px",
    },
    {
      image: singlesofa,
      top: "70%",
      left: "15%",
      height: "400px",
      width: "350px",
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
