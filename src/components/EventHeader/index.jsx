import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import logo from "../../assets/logo/FS Logo.png";

const upperItems = [
  "Seating",
  "Tables",
  "Arabic Furniture",
  "Outdoor Furniture",
  "Exhibition Furniture",
  "About Us",
  "Contanct Us",
];

function getCategoriesByNameAndParent(categories, name) {
  const category = categories?.find(
    (cat) => cat.name.toLowerCase() === name.toLowerCase()
  );

  if (!category) {
    return [];
  }

  return categories?.filter((cat) => cat.parent === category.id);
}

function EventHeader({ categories }) {
  const [selectedItem, setSelectedItem] = React.useState(null);
  const popoverRef = React.useRef(null);
  const navigate = useNavigate();

  const popoverContents = {
    Seating: getCategoriesByNameAndParent(categories, "seating"),
    Tables: getCategoriesByNameAndParent(categories, "tables"),
    "Arabic Furniture": getCategoriesByNameAndParent(
      categories,
      "Arabic Furniture"
    ),
    "Outdoor Furniture": getCategoriesByNameAndParent(
      categories,
      "Outdoor Furniture"
    ),
    "Exhibition Furniture": getCategoriesByNameAndParent(
      categories,
      "Exhibition Furniture"
    ),
  };

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
      <Toolbar
        disableGutters
        className="lower-toolbar"
        sx={{
          justifyContent: "space-between",
          width: "100%",
          background: "#795548b3",
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
            {upperItems?.map((item) => (
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
      {selectedItem && popoverContents[selectedItem]?.length > 0 && (
        <Box
          ref={popoverRef}
          sx={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            width: "100vw",
            height: "300px",
            backgroundColor: "white",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            zIndex: 10,
            padding: 2,
          }}
        >
          <Grid container spacing={2}>
            {popoverContents[selectedItem]?.length > 0 &&
              popoverContents[selectedItem]?.map((content) => (
                <Grid sx={{ padding: "20px" }} item xs={3} key={content?.name}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onClick={() =>
                      navigate(`/category/${content?.id}`, {
                        state: { name: content?.name },
                      })
                    }
                  >
                    <img style={{ height: "60px" }} src={content?.image?.src} />
                    <Typography
                      sx={{
                        marginLeft: 1,
                        color: "black",
                        cursor: "pointer",
                        fontFamily: "Brooklyn-Normal",
                        fontSize: "16px !important",
                      }}
                    >
                      {content?.name}
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
