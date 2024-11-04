import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Pagination,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./index.css";
import { PropagateLoader } from "react-spinners";
import { useLocation, useNavigate } from "react-router-dom";
import Category from "../../services/category";
import Footer from "../Footer";
import EventHeader from "../EventHeader";

const ProductList = () => {
  const [productsList, setProductsList] = useState([]);
  const [categories, setCategories] = useState([]);
  const location = useLocation();
  const [totalProducts, setTotalProducts] = useState(0);
  const { id, name } = location?.state || {};
  const [loading, setLoading] = useState(false);
  const [subId, setSubId] = useState(id);
  const [subName, setSubName] = useState("");
  const [mainCategories, setMainCategories] = useState([]);
  const [subcategories, setSubCategories] = useState([]);
  const [expandedAccordions, setExpandedAccordions] = useState([]);
  
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

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
      const mainCats = res?.data?.filter(cat => cat?.display !== "subcategories");
      setMainCategories(mainCats);
      const allSubCats = res?.data?.filter(cat => cat.parent);
      setSubCategories(allSubCats);

      const urlCategory = decodeURIComponent(name || "").replace(/_/g, " ");
      const matchedCategory = mainCats.find(cat => cat.name.toLowerCase() === urlCategory.toLowerCase());
      if (matchedCategory) {
        setExpandedAccordions(prev => [...prev, matchedCategory.id]);
      }

      setLoading(false);
    });
    fetchProducts(currentPage);
  }, [id, currentPage]);

  const onClickCategory = (index, prodName) => {
    const subcategoryName = encodeURIComponent(subName).toLowerCase().replace(/%20/g, "_");
    const formattedName = encodeURIComponent(name).toLowerCase().replace(/%20/g, "_");
    const productName = encodeURIComponent(prodName).toLowerCase().replace(/%20/g, "_");
    
    if (subcategoryName) {
      navigate(`/${formattedName}/${subcategoryName}/${productName}/${index}`, { state: { id: index } });
    } else {
      navigate(`/${formattedName}/${productName}/${index}`, { state: { id: index } });
    }
  };

  const handleMainCategoryClick = (categoryId, categoryName) => {
    setSubId(categoryId);
    setSubName("");
    setCurrentPage(1);
    const categoryEncoded = encodeURIComponent(categoryName).toLowerCase().replace(/%20/g, "_");
    navigate(`/${categoryEncoded}`, { state: { id: categoryId, name: categoryName } });
  };

  const handleAccordionToggle = (categoryId) => {
    setExpandedAccordions((prev) => {
      if (prev.includes(categoryId)) {
        return prev.filter(id => id !== categoryId); // Remove if already expanded
      } else {
        return [...prev, categoryId]; // Add to expanded
      }
    });
  };

  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    fetchProducts(value);
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
            <div className="main-categories">
              {mainCategories.map((category) => {
                const isExpanded = expandedAccordions.includes(category.id);
                const hasSubcategories = subcategories.some(sub => sub.parent === category.id);
                const isActive = category.id === subId; // Check if the category is active

                return (
                  <Accordion key={category.id} expanded={isExpanded}>
                    <AccordionSummary
                      expandIcon={
                        hasSubcategories ? (
                          <ExpandMoreIcon
                            onClick={(e) => {
                              e.stopPropagation(); // Prevents the summary click from triggering navigation
                              handleAccordionToggle(category.id);
                            }}
                          />
                        ) : (
                          <div style={{ visibility: 'hidden' }} />
                        )
                      }
                    >
                      <Typography
                        onClick={() => handleMainCategoryClick(category.id, category.name)} // Navigates on text click
                        style={{
                          cursor: "pointer",
                          fontWeight: isActive ? "bold" : "normal", // Highlight active category
                          color: isActive ? "#795548" : "inherit", // Change color for active category
                        }}
                      >
                        {category.name}
                      </Typography>
                    </AccordionSummary>
                    {hasSubcategories && (
                      <AccordionDetails>
                        <div>
                          {subcategories.filter(sub => sub.parent === category.id).map((subcategory) => (
                            <div
                              key={subcategory.id}
                              onClick={() => {
                                setSubId(subcategory.id);
                                setSubName(subcategory.name);
                                setCurrentPage(1);
                                const subcategoryName = encodeURIComponent(subcategory.name).toLowerCase().replace(/%20/g, "_");
                                const formattedName = encodeURIComponent(category?.name).toLowerCase().replace(/%20/g, "_");
                                navigate(`/${formattedName}/${subcategoryName}`, { state: { id: subcategory?.id, name: subcategory?.name } });
                              }}
                            >
                              <Typography>{subcategory.name}</Typography>
                            </div>
                          ))}
                        </div>
                      </AccordionDetails>
                    )}
                  </Accordion>
                );
              })}
            </div>
            {productsList.length > 0 && (
              <div className="product-list">
                <Grid container spacing={2}>
                  {productsList.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index} onClick={() => onClickCategory(item?.id, item?.name)}>
                      <Card className="card">
                        <img
                          src={item?.images[1] ? item?.images[1]?.src : item?.images[0]?.src}
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
            )}
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
                  color: "#000",
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
