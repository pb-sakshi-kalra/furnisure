// src/components/FurnitureGrid.js
import React from "react";
import { Grid, Paper } from "@mui/material";
import "./index.css";
import { useNavigate } from "react-router-dom";

const CategoryGrid = ({
  categories,
  description = true,
  name = "Categories",
}) => {
  const navigate = useNavigate();

  const onClickCategory = (id, name) => {
    navigate(`/category/${id}`, { state: { name } });
  };
  return (
    <div className="root">
      {description ? (
        <>
          <p>
            <strong>Welcome</strong> to the ultimate destination for event
            furniture rental in Dubai! At FurniSure Rentals, we bring you an
            exciting array of stylish and high-quality furniture that transforms
            any occasion into a memorable event. Whether you're planning an
            elegant wedding, a corporate gala, or a casual outdoor party, our
            furniture rental in Dubai offers convenience and flair to suit your
            unique vision.
          </p>
          <p>
            Explore our diverse collection of event furniture rental in Dubai,
            ranging from chic lounge settings to elegant dining arrangements.
            Each piece combines comfort and style, ensuring your guests are
            impressed and at ease. With our flexible rental options, you can
            effortlessly create the perfect setting without the hassle of
            ownership.
          </p>
          <p>
            Dive into our curated categories below and envision your next event
            elevated with FurniSure Rentals. We're here to help you make every
            occasion special, stylish, and stress-free. Let's create
            unforgettable moments together!
          </p>
        </>
      ) : null}
      <h1 style={{ marginBottom: "40px" }}>{name}</h1>
      <Grid container spacing={3}>
        {categories.map(
          (item, index) =>
            item?.name !== "Uncategorized" && (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={2}
                key={index}
                onClick={() => onClickCategory(item.id, item?.name)}
              >
                <Paper className="paper">
                  <img src={item?.image} className="icon" />
                  <p className="paper-heading">{item.name}</p>
                </Paper>
              </Grid>
            )
        )}
      </Grid>
    </div>
  );
};

export default CategoryGrid;
