import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import AdbIcon from "@mui/icons-material/Adb";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import bedsideTable from "../../assets/icons/bedside-tables.svg";
import coffeeTable from "../../assets/icons/coffee-tables.svg";
import desk from "../../assets/icons/Desks.svg";
import diningChairs from "../../assets/icons/dining-chair.svg";
import diningTables from "../../assets/icons/dining-tables.svg";
import downlights from "../../assets/icons/Downlights.svg";
import officeChairs from "../../assets/icons/Office-Chairs.svg";
import pendantLights from "../../assets/icons/Pendant-Lights.svg";
import sofas from "../../assets/icons/sofas.svg";

import logo from "../../assets/logo/FS Logo.png";

const upperItems = [
  "Seating",
  "Tables",
  "Arabic Frunitures",
  "Outdoor Furnitures",
  "Bars",
  "About Us",
  "Contanct Us",
];

const popoverContents = {
  Seating: [
    { title: "Pendant lights", icon: bedsideTable },
    { title: "Floor lamps", icon: coffeeTable },
    { title: "Wall lamps", icon: desk },
    { title: "Pendant lights", icon: bedsideTable },
    { title: "Floor lamps", icon: coffeeTable },
    { title: "Wall lamps", icon: desk },
    { title: "Pendant lights", icon: bedsideTable },
    { title: "Floor lamps", icon: coffeeTable },
    { title: "Wall lamps", icon: desk },
    { title: "Pendant lights", icon: bedsideTable },
    { title: "Floor lamps", icon: coffeeTable },
    { title: "Wall lamps", icon: desk },
  ],
  Tables: [
    { title: "Table lamps", icon: diningChairs },
    { title: "Socket pendants and lamp shades", icon: diningTables },
    { title: "Ceiling lights", icon: downlights },
    { title: "Table lamps", icon: diningChairs },
    { title: "Socket pendants and lamp shades", icon: diningTables },
    { title: "Ceiling lights", icon: downlights },
    { title: "Table lamps", icon: diningChairs },
    { title: "Socket pendants and lamp shades", icon: diningTables },
    { title: "Ceiling lights", icon: downlights },
  ],
  Bars: [
    { title: "Light bulbs and accessories", icon: pendantLights },
    { title: "Outdoor lighting", icon: sofas },
    { title: "Smart lighting", icon: officeChairs },
  ],
};

function EventHeader() {
  const [selectedItem, setSelectedItem] = React.useState(null);
  const popoverRef = React.useRef(null);

  const handleClick = (item) => {
    setSelectedItem(selectedItem === item ? null : item);
  };

  const handleClickOutside = (event) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target)) {
      setSelectedItem(null);
    }
  };

  React.useEffect(() => {
    if (selectedItem) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedItem]);

  return (
    <AppBar
      position="fixed"
      className="event-header"
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        color: "black",
        background: "none !important",
      }}
    >
      {/* Upper Layer */}
      <Toolbar
        sx={{
          justifyContent: "center",
          padding: "10px 0px",
          background: "#ffffffc7",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <a href="/">
            <img style={{ width: "250px" }} src={logo} />
          </a>
        </Box>
      </Toolbar>
      {/* Lower Layer */}
      <Toolbar
        disableGutters
        className="lower-toolbar"
        sx={{
          justifyContent: "space-between",
          width: "100%",
          background: "#8c568fcc",
          height: "50px !important",
          minHeight: "50px !important",
        }}
      >
        <Box
          sx={{
            display: "flex",
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              padding: "0px 80px",
              height: "100%",
              justifyContent: "space-around",
            }}
          >
            {upperItems.map((item) => (
              <Button
                key={item}
                onClick={() => handleClick(item)}
                sx={{
                  color: selectedItem === item ? "black" : "white", // text color changes based on selection
                  backgroundColor:
                    selectedItem === item ? "white" : "transparent", // background color changes based on selection
                  display: "flex",
                  alignItems: "center",
                  marginRight: 2,
                  zIndex: 1,
                  height: "100%",
                  "&:hover": {
                    backgroundColor:
                      selectedItem === item
                        ? "white"
                        : "rgba(255, 255, 255, 0.1)", // optional hover effect
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Box>
      </Toolbar>
      {selectedItem && (
        <Box
          ref={popoverRef}
          sx={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            width: "100vw",
            height: "300px", // Fixed height for better visibility
            backgroundColor: "white",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            zIndex: 10,
            padding: 2,
          }}
        >
          <Grid container spacing={2}>
            {popoverContents[selectedItem].map((content) => (
              <Grid sx={{ padding: "20px" }} item xs={3} key={content.title}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img style={{ height: "60px" }} src={content.icon} />
                  <Typography
                    sx={{
                      marginLeft: 1,
                      color: "black",
                      cursor: "pointer",
                      fontFamily: "Brooklyn-Normal",
                      fontSize: "16px !important",
                    }}
                  >
                    {content.title}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </AppBar>
  );
}

export default EventHeader;
