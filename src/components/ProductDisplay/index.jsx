// Example.jsx

import React from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { Container, Typography, Box } from "@mui/material";
import "./index.css"; // Import SCSS file here

const Example = () => {
  return (
    <Box className="bg-neutral-800">
      <Box className="flex h-48 items-center justify-center">
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold", color: "text.secondary" }}
        >
          Scroll down
        </Typography>
      </Box>
      <HorizontalScrollCarousel />
      <Box className="flex h-48 items-center justify-center">
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold", color: "text.secondary" }}
        >
          Scroll up
        </Typography>
      </Box>
    </Box>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = React.useRef(null);
  const { scrollYProgress } = useViewportScroll();

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <Container ref={targetRef} className="relative h-300vh bg-neutral-900">
      <Box className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
      </Box>
    </Container>
  );
};

const Card = ({ card }) => {
  return (
    <Box
      key={card.id}
      className="group relative h-450px w-450px overflow-hidden bg-neutral-200"
    >
      <Box
        component="div"
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      />
      <Box className="absolute inset-0 z-10 grid place-content-center">
        <Typography
          variant="h3"
          className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg"
        >
          {card.title}
        </Typography>
      </Box>
    </Box>
  );
};

export default Example;

const cards = [
  {
    url: "/imgs/abstract/1.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 7,
  },
];
