import React, { useEffect, useState, CSSProperties } from "react";
import { PropagateLoader } from "react-spinners";
import { Grid, Typography, Button, Box } from "@mui/material";
import EventHeader from "../EventHeader";
import "./index.css";
import { useParams } from "react-router-dom";
import Footer from "../Footer";

import Product from "../../services/products";
import Category from "../../services/category";
import ProductSlider from "../ProductSlider";

const ProductDetail = () => {
  const { id } = useParams();
  const [image, setImage] = useState();
  const [product, setProduct] = useState();
  const [upscale, setUpscale] = useState([]);
  const [crossscale, setCrossscale] = useState([])
  const [categories, setCategories] = useState();
  const [loadingRelated, setLoadingRelated] = useState(true);

  useEffect(() => {
    Product.getByID(id).then((res) => {
      setProduct(res?.data);
      setImage(res?.data?.images[1]?.src);

      const cross = res?.data?.cross_sell_ids || [];
      const up = res?.data?.upsell_ids || [];
      Promise.all(cross.map((prod) => Product.getByID(prod))).then(
        (results) => {
          const uniqueProducts = results
            .map((res) => res?.data)
            .filter(Boolean);
            setCrossscale((prev) => {
            const existingIds = prev.map((item) => item.id);
            return [
              ...prev,
              ...uniqueProducts.filter(
                (item) => !existingIds.includes(item.id)
              ),
            ];
          });
          setLoadingRelated(false);
        }
      );
      Promise.all(up.map((prod) => Product.getByID(prod))).then(
        (results) => {
          const uniqueProducts = results
            .map((res) => res?.data)
            .filter(Boolean);
            setUpscale((prev) => {
            const existingIds = prev.map((item) => item.id);
            return [
              ...prev,
              ...uniqueProducts.filter(
                (item) => !existingIds.includes(item.id)
              ),
            ];
          });
          setLoadingRelated(false);
        }
      );
    });

    Category.get().then((res) => setCategories(res?.data));
  }, [id]);

  return (
    <>
      <EventHeader categories={categories} />
      <div className="product-detail">
        {loadingRelated ? (
          <div className="loading">
            <PropagateLoader
              color={"#795548"}
              loading={loadingRelated}
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          <>
            <Grid container spacing={2}>
              <Grid sx={{ marginTop: "20px" }} container xs={12} md={6}>
                <Grid item xs={2}>
                  <Box className="thumbnail-section">
                    <Grid container direction="column">
                      {product?.images?.map((img, index) => (
                        <Grid key={index} item className="thumbnail">
                          <img
                            src={img?.src}
                            alt="Thumbnail"
                            className="thumbnail"
                            onClick={() => setImage(img?.src)}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Grid>
                <Grid item xs={10}>
                  <Box className="image-section">
                    <img src={image} alt="Main" className="main-image" />
                  </Box>
                </Grid>
              </Grid>
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
                  {/* <Typography variant="h6" className="product-price-new">
                    Rental Price : AED {product?.price} / day
                  </Typography> */}
                  <Button className="shop-button">Add to Cart</Button>
                </Box>
              </Grid>
            </Grid>

            <h1 className="dimension">Dimensions</h1>
            <div className="product-dimension">
              <img src={product?.images[0]?.src} alt="Dimension" />
              <div>
                <div className="dimension-grid">
                  <p></p>
                  <p>
                    <strong>Categories:</strong>&nbsp;
                    {product?.categories?.map((category, index) => (
                      <a key={index} href="/">
                        {category?.name}
                        {index !== product?.categories?.length - 1
                          ? ", "
                          : null}
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

            <div className="relatable_product">
              {crossscale?.length === product?.cross_sell_ids?.length && (
                <ProductSlider sell={true} products={crossscale} name="Cross Sell"/>
              )}
                {upscale?.length === product?.upsell_ids?.length && (
                <ProductSlider sell={true} products={upscale}  name="Up Sell" />
              )}
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
};

export default ProductDetail;
