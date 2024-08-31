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
import dimension from "../../assets/forum-3-seater-sofa-dimensions.webp";

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
          <Grid sx={{ marginTop: "20px" }} container xs={12} md={6}>
            {/* Thumbnail Section */}
            <Grid item xs={2}>
              <Box className="thumbnail-section">
                <Grid container direction="column">
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
            <Grid item xs={10}>
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
                    __html: product?.short_description || "",
                  }}
                />
              </Typography>
              <Typography variant="h6" className="product-price-new">
                Rental Price : AED {product?.price} / day
              </Typography>
              <Button className="shop-button">Add to Cart</Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <h1 className="dimension">Dimensions</h1>
      <div className="product-dimension">
        <img src={dimension} />
        <div>
          <div className="dimension-grid">
            <p></p>
            <p>
              <strong>Categories:</strong>&nbsp;
              {product?.categories?.map((category, index) => (
                <a href="/">
                  {category?.name}
                  {index !== product?.categories?.length - 1 ? ", " : null}
                </a>
              ))}
            </p>
          </div>
          <div className="dimension-grid">
            <p>Height</p>
            <p>{product?.dimensions?.height}</p>
          </div>
          <div className="dimension-grid">
            <p>Length</p>
            <p>{product?.dimensions?.length}</p>
          </div>
          <div className="dimension-grid">
            <p>Width</p>
            <p>{product?.dimensions?.width}</p>
          </div>
          <div className="dimension-grid seat">
            <p>Seat Height</p>
            <p>{product?.weight}</p>
          </div>
        </div>
      </div>
      <div className="description">{product?.description}</div>
      <Footer />
    </>
  );
};

export default ProductDetail;
