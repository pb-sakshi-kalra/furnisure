// src/components/ProductDetail.js
import React, { useState } from "react";
import { Grid, Paper, Typography, Button, Box } from "@mui/material";
import "./index.css";
import Footer from "../Footer";
import chair1 from "../../assets/chairs/chair1.webp";
import chair2 from "../../assets/chairs/chair2.webp";
import chair3 from "../../assets/chairs/chair3.webp";
import chair4 from "../../assets/chairs/chair4.webp";

const ProductDetail = () => {
  const [image, setImage] = useState(chair1);
  return (
    <>
      <Paper className="product-detail" elevation={3}>
        <h1 className="title">Product Details</h1>
        <Grid container spacing={2}>
          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <Box className="image-section">
              <img src={image} alt="Main" className="main-image" />
              <Grid container spacing={1} className="thumbnail-section">
                <Grid item xs={4} onClick={() => setImage(chair2)}>
                  <img src={chair2} alt="Thumbnail" className="thumbnail" />
                </Grid>
                <Grid item xs={4} onClick={() => setImage(chair3)}>
                  <img src={chair3} alt="Thumbnail" className="thumbnail" />
                </Grid>
                <Grid item xs={4} onClick={() => setImage(chair4)}>
                  <img src={chair4} alt="Thumbnail" className="thumbnail" />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          {/* Detail Section */}
          <Grid item xs={12} md={6}>
            <Box className="detail-section">
              <h3 className="product-title">Ingenious coffee tray table</h3>
              <Typography variant="body2" className="product-description">
                The design makes it easy to put the tray back after use since
                you place it directly on the table frame without having to fit
                it into any holes.
              </Typography>
              <Typography variant="body2" className="product-description">
                You can use the removable tray for serving. The tray's edges
                make it easy to carry and reduce the risk of glasses sliding
                off.
              </Typography>
              <Typography variant="body2" className="product-description">
                Only for indoor use.
              </Typography>
              <Typography variant="body2" className="product-price-old">
                $19.00
              </Typography>
              <Typography variant="h6" className="product-price-new">
                $16.99
              </Typography>
              <Button className="shop-button">Shop this item</Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Footer />
    </>
  );
};

export default ProductDetail;
