// src/components/FurnitureGrid.js
import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import "./index.css";
import rug from "../../assets/icons/1place-rug-iconsvg.svg";
import armchair from "../../assets/icons/armchair-icon.svg";
import art from "../../assets/icons/art.svg";
import barStool from "../../assets/icons/bar-stools.svg";
import bathTowels from "../../assets/icons/Bath-Towels-Beach-Towels.svg";
import beds from "../../assets/icons/beds.svg";
import bedsideTable from "../../assets/icons/bedside-tables.svg";
import coffeeTable from "../../assets/icons/coffee-tables.svg";
import desk from "../../assets/icons/Desks.svg";
import diningChairs from "../../assets/icons/dining-chair.svg";
import diningTables from "../../assets/icons/dining-tables.svg";
import downlights from "../../assets/icons/Downlights.svg";
import officeChairs from "../../assets/icons/Office-Chairs.svg";
import pendantLights from "../../assets/icons/Pendant-Lights.svg";
import sofas from "../../assets/icons/sofas.svg";
import storage from "../../assets/icons/storage-and-display.svg";
import tableLamp from "../../assets/icons/table-lamp.svg";
import vases from "../../assets/icons/Vases_2020-12-09-085902.svg";
import { useNavigate } from "react-router-dom";
import Category from "../../services/category";

const items = [
  { label: "RUG", icon: rug },
  { label: "ARMCHAIR", icon: armchair },
  { label: "ART", icon: art },
  { label: "BATH TOWELS", icon: bathTowels },
  { label: "BAR STOOLS", icon: barStool },
  { label: "DINING CHAIRS", icon: diningChairs },
  { label: "DINING TABLES", icon: diningTables },
  { label: "BED SIZES", icon: beds },
  { label: "COFFEE TABLES", icon: coffeeTable },
  { label: "BEDSIDE TABLES", icon: bedsideTable },
  { label: "OFFICE CHAIRS", icon: officeChairs },
  { label: "DESK", icon: desk },
  { label: "DOWN LIGHTS", icon: downlights },
  { label: "PENDANT LIGHTS", icon: pendantLights },
  { label: "SOFAS", icon: sofas },
  { label: "STORAGE", icon: storage },
  { label: "TABLE LAMP", icon: tableLamp },
  { label: "VASES", icon: vases },
];

const CategoryGrid = () => {
  const navigate = useNavigate();

  const onClickCategory = (name) => {
    navigate(`/category/${name.toLowerCase()}`);
  };
  return (
    <div className="root">
      <h1>Categories</h1>
      <p>
        Thinking about hosting an event or refreshing your home or office space?
        We've got you covered! Check out our event furniture to add that special
        touch to your gatherings, or browse our home and office collections for
        long-term comfort. Just click through to find what suits you best!
      </p>
      <Grid container spacing={3}>
        {items.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
            key={index}
            onClick={() => onClickCategory(item.label)}
          >
            <Paper className="paper">
              <img src={item?.icon} className="icon" />
              <p className="paper-heading">{item.label}</p>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CategoryGrid;
