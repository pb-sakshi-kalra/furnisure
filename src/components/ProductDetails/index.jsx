// src/components/ProductDetail.js
import React, { useEffect, useState } from "react";
import { Grid, Paper, Typography, Button, Box } from "@mui/material";
import EventHeader from "../EventHeader";
import "./index.css";
import { useParams } from "react-router-dom";
import Footer from "../Footer";

import Product from "../../services/products";
import Category from "../../services/category";

const ProductDetail = () => {
  const { id } = useParams();
  const [image, setImage] = useState();
  const [product, setProduct] = useState();
  const [categories, setCategories] = useState();

  useEffect(() => {
    Product.getByID(id).then((res) => {
      setProduct(res?.data);
      setImage(res?.data?.images[1]?.src);
    });
    Category.get().then((res) => setCategories(res?.data));
  }, [id]);

  return (
    <>
      <EventHeader categories={categories} />
      <div className="product-detail">
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
      </div>
      <h1 className="dimension">Dimensions</h1>
      <div className="product-dimension">
        <img src={product?.images[0]?.src} />
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
