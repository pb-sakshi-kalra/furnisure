import React, { useEffect, useState } from "react";
import { Grid, Card, CardContent } from "@mui/material";
import "./index.css";
import { PropagateLoader } from "react-spinners";
import { useParams, useLocation } from "react-router-dom";
import Category from "../../services/category";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import EventHeader from "../EventHeader";

const ProductList = () => {
  const [subcategories, setSubCategories] = useState([]);
  const [productsList, setProductsList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [index, setIndex] = useState(id);
  const location = useLocation();
  const { name } = location?.state;
  const navigate = useNavigate();

  const onClickCategory = (index) => {
    navigate(`/product/${index}`);
  };

  useEffect(() => {
    setLoading(true);
    Category.get().then((res) => {
      setCategories(res?.data);
      const subCats = res?.data?.filter((_) => `${_?.parent}` == id);
      setSubCategories(subCats);
      setLoading(false);
    });
    Category.getSubcategory(id).then((res) => setProductsList(res?.data));
  }, [id]);

  const renderSubcategories = (subcategories) => {
    return (
      <ul>
        {subcategories?.map((subcategory) => (
          <li
            key={subcategory.id}
            onClick={() => {
              Category.getSubcategory(subcategory?.id).then((res) => {
                setProductsList(res?.data);
              });
            }}
          >
            <span>{subcategory.name}</span>
            {subcategory.children &&
              subcategory.children.length > 0 &&
              renderSubcategories(subcategory.children)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <EventHeader categories={categories} />
      <div className="background-category">
        <div className="category-heading">
          <h1>{name || ""}</h1>
        </div>
      </div>
      {loading ? (
        <div className="loading">
          <PropagateLoader
            color={"#795548"}
            loading={loading}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <h2 className="products-heading">Products List</h2>
          <div className="product-page">
            <div className="subcategory">
              {renderSubcategories(subcategories)}
            </div>
            {productsList?.length > 0 ? (
              <div
                className="product-list"
                style={{ width: `${subcategories?.length === 0 && "100%"}` }}
              >
                <Grid container spacing={2}>
                  {productsList?.map((item, index) => (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      lg={4}
                      key={index}
                      onClick={() => onClickCategory(item?.id)}
                    >
                      <Card className="card">
                        <img
                          src={
                            item?.images[1]
                              ? item?.images[1]?.src
                              : item?.images[0]?.src
                          }
                          alt={item?.name}
                        />
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
          </div>
        </>
      )}
      <Footer />
    </>
  );
};

export default ProductList;
