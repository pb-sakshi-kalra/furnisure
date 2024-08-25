import React from "react";
import { Masonry } from "@mui/lab";
import { Box } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";

import "./index.css";

import main1 from "../../assets/main/main1.jpg";
import main2 from "../../assets/main/main2.jpg";
import main3 from "../../assets/main/main3.jpg";
import main4 from "../../assets/main/main4.jpg";
import main5 from "../../assets/main/main5.jpg";
import main6 from "../../assets/main/main6.jpg";

const items = [
  { id: 1, height: 300, img: main1 },
  { id: 2, height: 350, img: main2 },
  { id: 3, height: 400, img: main3 },
  { id: 4, height: 400, img: main4 },
  { id: 5, height: 350, img: main5 },
  { id: 6, height: 300, img: main6 },
];

const MasonryLayout = () => {
  return (
    <>
      <h1>Follow our Socials</h1>
      <Box sx={{ width: "100%", height: "90vh", overflowY: "auto" }}>
        <Masonry columns={3}>
          {items.map((item) => (
            <Box
              className="masonary-box"
              key={item.id}
              sx={{
                height: item.height,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "1.5rem",
                borderRadius: 1,
              }}
            >
              <div className="social-div">
                <InstagramIcon fontSize="large" />
              </div>
              <img style={{ height: "100%", width: "100%" }} src={item.img} />
            </Box>
          ))}
        </Masonry>
      </Box>
    </>
  );
};

export default MasonryLayout;
