import React, { useEffect, useState } from "react";
import { Grid, Card, CardContent, Button, Pagination } from "@mui/material";
import "./index.css";
import { PropagateLoader } from "react-spinners";
import { useLocation } from "react-router-dom";
import Category from "../../services/category";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import EventHeader from "../EventHeader";

const ProductList = () => {
  const [subcategories, setSubCategories] = useState([]);
  const [productsList, setProductsList] = useState([]);
  const [categories, setCategories] = useState([]);
  const location = useLocation();
  const [totalProducts, setTotalProducts] = useState(0);
  const { id, name } = location?.state;
  const [loading, setLoading] = useState(false);
  const [subId, setSubId] = useState(id);
  const [subName, setSubName] = useState("");

  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const onClickCategory = (index, prodName) => {
    const subcategoryName = encodeURIComponent(subName)
      .toLowerCase()
      .replace(/%20/g, "_");
    const formattedName = encodeURIComponent(name)
      .toLowerCase()
      .replace(/%20/g, "_");
    const productName = encodeURIComponent(prodName)
      .toLowerCase()
      .replace(/%20/g, "_");
    if (subcategoryName) {
      navigate(`/${formattedName}/${subcategoryName}/${productName}/${index}`, {
        state: { id: index },
      });
    } else {
      navigate(`/${formattedName}/${productName}/${index}`, { state: { id: index } });
    }
  };

  const fetchProducts = (page) => {
    setLoading(true);
    Category.getSubcategory(subId, page, productsPerPage).then((res) => {
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
            className="marker"
            key={subcategory?.id}
            onClick={() => {
              setSubId(subcategory?.id);
              setSubName(subcategory?.name);
              setCurrentPage(1);
              const subcategoryName = encodeURIComponent(subcategory.name)
                .toLowerCase()
                .replace(/%20/g, "_");
              const formattedName = encodeURIComponent(name)
                .toLowerCase()
                .replace(/%20/g, "_");
              navigate(`/${formattedName}/${subcategoryName}`, {
                state: { id, name },
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

  // Calculate total pages
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    fetchProducts(value); // Fetch products for the new page
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
                      lg={3}
                      key={index}
                      onClick={() => onClickCategory(item?.id, item?.name)}
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

          <div className="pagination">
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              siblingCount={1}
              boundaryCount={1}
              showFirstButton
              showLastButton
              sx={{
                "& .MuiPaginationItem-root": {
                  color: "#rgba(130, 130, 130, 0.097)",
                },
                "& .MuiPaginationItem-root.Mui-selected": {
                  backgroundColor: "#795548",
                  color: "#ffffff",
                },
                "& .MuiPaginationItem-root:hover": {
                  backgroundColor: "#795548",
                  color: "#ffffff",
                },
              }}
            />
          </div>
        </>
      )}
      <Footer />
    </>
  );
};

export default ProductList;
