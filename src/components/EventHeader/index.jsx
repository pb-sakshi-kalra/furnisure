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

const upperItems = ["Categories", "Events", "Chairs"];
const lowerItems = [
  { name: "About Us", icon: <AdbIcon /> },
  { name: "Contact Us", icon: <AdbIcon /> },
];

const popoverContents = {
  Categories: [
    { title: "Pendant lights", icon: bedsideTable },
    { title: "Floor lamps", icon: coffeeTable },
    { title: "Wall lamps", icon: desk },
  ],
  Events: [
    { title: "Table lamps", icon: diningChairs },
    { title: "Socket pendants and lamp shades", icon: diningTables },
    { title: "Ceiling lights", icon: downlights },
  ],
  Chairs: [
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
      sx={{
        position: "relative",
        top: 0,
        left: 0,
        right: 0,
        color: "black",
        backgroundColor: "none",
        background: "none",
      }}
    >
      {/* Upper Layer */}
      <Toolbar
        sx={{
          justifyContent: "space-between",
          padding: "10px 0px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img style={{ width: "250px" }} src={logo} />
        </Box>

        <IconButton color="inherit">
          <FavoriteIcon />
        </IconButton>
      </Toolbar>
      {/* Lower Layer */}
      <Toolbar
        disableGutters
        sx={{
          justifyContent: "space-between",
          width: "100%",
          background: "#8c568f",
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
          <Box sx={{ display: "flex", flexGrow: 1, height: "100%" }}>
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
                {selectedItem === item ? (
                  <KeyboardArrowUpIcon sx={{ marginLeft: 0.5 }} />
                ) : (
                  <KeyboardArrowDownIcon sx={{ marginLeft: 0.5 }} />
                )}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: "flex" }}>
            {lowerItems.map((item) => (
              <Button
                key={item.name}
                sx={{ color: "white", display: "flex", marginLeft: "auto" }}
              >
                {item.name}
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
              <Grid item xs={4} key={content.title}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img style={{ height: "50px" }} src={content.icon} />
                  <Typography
                    sx={{ marginLeft: 1, color: "black", cursor: "pointer" }}
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
