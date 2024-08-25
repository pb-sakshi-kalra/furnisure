// src/components/ProductDetail.js
import React, { useEffect, useState } from "react";
import { Grid, Paper, Typography, Button, Box } from "@mui/material";
import EventHeader from "../EventHeader";
import "./index.css";
import { useParams } from "react-router-dom";
import Footer from "../Footer";
import chair1 from "../../assets/chairs/chair1.webp";
import chair2 from "../../assets/chairs/chair2.webp";
import chair3 from "../../assets/chairs/chair3.webp";
import chair4 from "../../assets/chairs/chair4.webp";

import Product from "../../services/products";

const ProductDetail = () => {
  const { id } = useParams();
  const [image, setImage] = useState();
  const [product, setProduct] = useState();

  useEffect(() => {
    Product.getByID(id).then((res) => {
      setProduct(res?.data);
      setImage(res?.data?.images[0]?.src);
    });
  }, [id]);

  return (
    <>
      <EventHeader />
      <Paper className="product-detail" elevation={3}>
        <Grid container spacing={2}>
          {/* Image Section */}
          <Grid container spacing={2}>
            {/* Thumbnail Section */}
            <Grid item xs={3}>
              <Box className="thumbnail-section">
                <Grid container direction="column" spacing={1}>
                  {product?.images?.map((image, index) => (
                    <Grid key={index} item>
                      <img
                        src={image?.src}
                        alt="Thumbnail"
                        className="thumbnail"
                        onClick={() => setImage(image?.src)}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
            {/* Main Image Section */}
            <Grid item xs={9}>
              <Box className="image-section">
                <img src={image} alt="Main" className="main-image" />
              </Box>
            </Grid>
          </Grid>
          {/* Detail Section */}
          <Grid item xs={12} md={6}>
            <Box className="detail-section">
              <h3 className="product-title">{product?.name}</h3>
              <Typography variant="body2" className="product-description">
                <div
                  dangerouslySetInnerHTML={{
                    __html: product?.description || "",
                  }}
                />
              </Typography>
              <Typography variant="h6" className="product-price-new">
                ${product?.price}
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
