import React, { useEffect, useState } from "react";
import { Grid, Card, CardContent } from "@mui/material";
import "./index.css";
import chair1 from "../../assets/chairs/chair1.webp";
import chair2 from "../../assets/chairs/chair2.webp";
import chair3 from "../../assets/chairs/chair3.webp";
import chair4 from "../../assets/chairs/chair4.webp";
import chair5 from "../../assets/chairs/chair5.webp";
import chair6 from "../../assets/chairs/chair6.webp";
import chair7 from "../../assets/chairs/chair7.webp";
import { useParams, useLocation } from "react-router-dom";

import Category from "../../services/category";

import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import EventHeader from "../EventHeader";

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
  const [subcategories, setSubCategories] = useState([]);
  const [productsList, setProductsList] = useState([]);
  const [categories, setCategories] = useState([]);
  const { id } = useParams();
  const location = useLocation();
  const { name } = location?.state;
  const navigate = useNavigate();

  const onClickCategory = (index) => {
    navigate(`/product/${index}`);
  };

  useEffect(() => {
    Category.get().then((res) => {
      setSubCategories(
        res?.data?.filter(
          (cate) => cate?.parent == id && cate?.display === "subcategories"
        )
      );
      setCategories(res?.data);
    });
    Category.getSubcategory(id).then((res) => setProductsList(res?.data));
  }, [id]);

  return (
    <>
      <EventHeader categories={categories} />
      <div className="background-category">
        <div className="category-heading">
          <h1>{name || ""}</h1>
        </div>
      </div>
      {/* {subcategories?.length > 0 ? (
        <CategoryGrid
          categories={subcategories}
          description={false}
          name="Sub-Categories"
        />
      ) : null} */}
      {productsList?.length > 0 ? (
        <div className="product-list">
          <h2 className="products-heading">Products List</h2>
          <Grid container spacing={2}>
            {productsList?.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={index}
                onClick={() => onClickCategory(item?.id)}
              >
                <Card className="card">
                  <img src={item?.images[0]?.src} />
                  <CardContent>
                    <h6 className="card-title">{item?.name}</h6>
                    <p className="card-para">{item?.price}</p>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      ) : null}
      <Footer />
    </>
  );
};

export default ProductList;
