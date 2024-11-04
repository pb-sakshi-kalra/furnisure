import React from "react";
import { Container, Typography } from "@mui/material";

const AboutUs = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: "20px" }}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to Furnisure, where we strive to provide the best products and services to our customers. 
      </Typography>
      <Typography variant="body1" paragraph>
        Our team is dedicated to ensuring that every customer has a wonderful experience, and we take pride in 
        our quality and service. We believe in [Core Values, e.g., integrity, innovation, etc.], and we aim to 
        reflect these values in every aspect of our business.
      </Typography>
      <Typography variant="body1" paragraph>
        Thank you for choosing us! We look forward to serving you and building lasting relationships with our 
        customers.
      </Typography>
    </Container>
  );
};

export default AboutUs;
