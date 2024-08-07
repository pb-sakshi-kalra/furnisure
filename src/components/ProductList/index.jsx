import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import "./index.css";
import chair1 from "../../assets/chairs/chair1.webp";
import chair2 from "../../assets/chairs/chair2.webp";
import chair3 from "../../assets/chairs/chair3.webp";
import chair4 from "../../assets/chairs/chair4.webp";
import chair5 from "../../assets/chairs/chair5.webp";
import chair6 from "../../assets/chairs/chair6.webp";
import chair7 from "../../assets/chairs/chair7.webp";
import EventBanner from "../EventBanner";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

const items = [
  {
    label: "Laraine Swivel Occasional Chair",
    image: chair1,
    price: "$735.00",
  },
  {
    label: "Jarell Swivel Occasional Chair",
    image: chair2,
    price: "$975.00",
  },
  {
    label: "Jando Boucle Occasional Chair",
    image: chair3,
    price: "$429.00",
  },
  {
    label: "Hawthorn Boucle Occasional Chair",
    image: chair4,
    price: "$1,009.00",
  },
  {
    label: "Gennadi Occasional Chair - Sand",
    image: chair5,
    price: "$639.00",
  },
  {
    label: "Gennadi Occasional Chair - Sand",
    image: chair6,
    price: "$639.00",
  },
  {
    label: "Gennadi Occasional Chair - Sand",
    image: chair7,
    price: "$639.00",
  },
];

const ProductList = () => {
  const navigate = useNavigate();

  const onClickCategory = (index) => {
    navigate(`/product/${index}`);
  };

  return (
    <>
      <EventBanner />
      <div className="product-list">
        <h2 className="products-heading">Products Lists</h2>
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={index}
              onClick={() => onClickCategory(index)}
            >
              <Card className="card">
                <img src={item.image} />
                <CardContent>
                  <h6 className="card-title">{item.label}</h6>
                  <p className="card-para">{item.price}</p>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
      <Footer />
    </>
  );
};

export default ProductList;
