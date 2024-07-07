import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LoaderImages = () => {
  const [images, setImages] = useState([
    {
      image: `https://images.pexels.com/photos/220749/pexels-photo-220749.jpeg?cs=srgb&dl=pexels-pixabay-220749.jpg`,
      top: "20%",
      left: "30%",
      height: "400px",
      width: "500px",
    },
    {
      image: `https://picsum.photos/200/300?random=2`,
      top: "40%",
      left: "35%",
      height: "400px",
      width: "200px",
    },
    {
      image: `https://picsum.photos/200/300?random=3`,
      top: "27%",
      left: "33%",
      height: "600px",
      width: "300px",
    },
    {
      image: `https://picsum.photos/200/300?random=4`,
      top: "25%",
      left: "35%",
      height: "300px",
      width: "200px",
    },
    {
      image: `https://picsum.photos/200/300?random=5`,
      top: "40%",
      left: "50%",
      height: "400px",
      width: "500px",
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
    }, 500); // Interval of 0.5 seconds

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
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, type: "easeIn" }}
            />
          )
      )}
    </>
  );
};

export default LoaderImages;
