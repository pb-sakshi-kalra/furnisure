import React, { useEffect, useState } from "react";
import { Grid, Card, CardContent, Button } from "@mui/material";
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
  const [totalProducts, setTotalProducts] = useState(0);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [subId, setSubId] = useState(id);
  const location = useLocation();
  const { name } = location?.state;
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const onClickCategory = (index) => {
    navigate(`/product/${index}`);
  };

  const fetchProducts = (page) => {
    setLoading(true);
    Category.getSubcategory(
      subId,
      page,
      productsPerPage
    ).then((res) => {
      setTotalProducts(res.headers.get("X-WP-Total"));
      setProductsList(res?.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    setLoading(true);
    Category.get().then((res) => {
      setCategories(res?.data);
      const subCats = res?.data?.filter((_) => `${_?.parent}` == id);
      setSubCategories(subCats);
      setLoading(false);
    });
    fetchProducts(currentPage);
  }, [subId, currentPage]);

  const renderSubcategories = (subcategories) => {
    return (
      <ul>
        {subcategories?.map((subcategory) => (
          <li
            key={subcategory?.id}
            onClick={() => {
              setSubId(subcategory?.id)
              setCurrentPage(1); // Reset to the first page when subcategory changes
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

  // Calculate the index of the last and first product
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productsList?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Calculate total pages
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  // Pagination controls
  const handlePageChange = (direction) => {
    setCurrentPage((prevPage) => {
      const newPage =
        direction === "next"
          ? Math.min(prevPage + 1, totalPages)
          : Math.max(prevPage - 1, 1);
      fetchProducts(newPage); // Fetch products for the new page
      return newPage;
    });
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
            {productsList.length > 0 ? (
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

          {/* Pagination Controls */}
          <div className="pagination">
            <Button
              onClick={() => handlePageChange("prev")}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <span>{`Page ${currentPage} of ${totalPages}`}</span>
            <Button
              onClick={() => handlePageChange("next")}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </>
      )}
      <Footer />
    </>
  );
};

export default ProductList;
