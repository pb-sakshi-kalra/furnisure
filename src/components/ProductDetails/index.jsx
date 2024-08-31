// src/components/ProductDetail.js
import React, { useEffect, useState } from "react";
import { Grid, Paper, Typography, Button, Box } from "@mui/material";
import EventHeader from "../EventHeader";
import "./index.css";
import { useParams } from "react-router-dom";
import Footer from "../Footer";
import chair1 from "../../assets/chairs/chair1.webp";
import chair2 from "../../assets/chairs/chair2.webp";
import chair3 from "../../assets/chairs/chair3.webp";
import chair4 from "../../assets/chairs/chair4.webp";
import dimension from "../../assets/forum-3-seater-sofa-dimensions.webp";

import Product from "../../services/products";

const ProductDetail = () => {
  const { id } = useParams();
  const [image, setImage] = useState();
  const [product, setProduct] = useState();

  useEffect(() => {
    Product.getByID(id).then((res) => {
      setProduct(res?.data);
      setImage(res?.data?.images[0]?.src);
    });
  }, [id]);

  return (
    <>
      <EventHeader />
      <Paper className="product-detail" elevation={3}>
        <Grid container spacing={2}>
          {/* Image Section */}
          <Grid sx={{ marginTop: "20px" }} container xs={12} md={6}>
            {/* Thumbnail Section */}
            <Grid item xs={2}>
              <Box className="thumbnail-section">
                <Grid container direction="column" spacing={1}>
                  {product?.images?.map((image, index) => (
                    <Grid key={index} item>
                      <img
                        src={image?.src}
                        alt="Thumbnail"
                        className="thumbnail"
                        onClick={() => setImage(image?.src)}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
            {/* Main Image Section */}
            <Grid item xs={10}>
              <Box className="image-section">
                <img src={image} alt="Main" className="main-image" />
              </Box>
            </Grid>
          </Grid>
          {/* Detail Section */}
          <Grid item xs={12} md={6}>
            <Box className="detail-section">
              <h3 className="product-title">{product?.name}</h3>
              <Typography variant="body2" className="product-description">
                <div
                  dangerouslySetInnerHTML={{
                    __html: product?.short_description || "",
                  }}
                />
              </Typography>
              <Typography variant="h6" className="product-price-new">
                ${product?.price}
              </Typography>
              <Button className="shop-button">Shop this item</Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <div className="product-dimension">
        <img src={dimension} />
        <div>
          <div className="dimension-grid">
            <p>Height</p>
            <p>{product?.dimensions?.height}</p>
          </div>
          <div className="dimension-grid">
            <p>Length</p>
            <p>{product?.dimensions?.length}</p>
          </div>
          <div className="dimension-grid">
            <p>Width</p>
            <p>{product?.dimensions?.width}</p>
          </div>
          <div className="dimension-grid seat">
            <p>Seat Height</p>
            <p>{product?.weight}</p>
          </div>
        </div>
      </div>
      <div className="product-description">
        <h1>Description</h1>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut officia
        laudantium ipsa hic dicta? Voluptate unde quaerat inventore aspernatur
        neque porro est cum quo. Ab similique perferendis, quaerat perspiciatis
        odit porro nihil temporibus voluptas corrupti, harum rem! Quos
        perspiciatis molestiae commodi iste dolor earum sapiente itaque deserunt
        ipsum quasi velit culpa odit eligendi totam quibusdam et a, laboriosam
        quisquam at vero! Optio, non fugit. Et accusamus est corporis. Deleniti
        consectetur voluptatibus maxime corporis exercitationem. Quia laborum
        quo praesentium tempore doloremque, qui corporis perspiciatis. Impedit
        est delectus alias officia quibusdam repudiandae, repellat blanditiis
        aliquam modi ducimus cum voluptate quos illum consequuntur enim
        similique laborum doloribus suscipit porro mollitia. Quo eum veritatis
        nobis amet sunt officia suscipit aliquid dolore debitis. Neque sint
        adipisci exercitationem. Eveniet, atque amet beatae ut in eius natus,
        nesciunt nam culpa impedit aliquam nihil ad, expedita dolorem quidem? Ea
        distinctio mollitia nostrum, neque illum et eaque quo ad laudantium rem
        porro tempora, doloribus incidunt saepe dolorem fugiat eligendi
        molestias provident commodi non. Dolor, voluptatum ab. Deleniti, hic
        pariatur, quis accusantium doloremque quisquam illum dolorum molestias
        fuga non repudiandae aliquam facilis dolor impedit aliquid est alias
        veniam tenetur? Reprehenderit labore, consequuntur ducimus, perspiciatis
        quo temporibus sequi fuga illum et maiores tempora, cum sed ratione quis
        nisi vitae. Possimus cumque voluptas, odit doloribus distinctio quas
        necessitatibus repellendus beatae quia modi, perferendis laborum ad quam
        hic obcaecati totam vel assumenda labore sunt minima pariatur officiis
        eius. Necessitatibus, autem et suscipit consequatur aut voluptatum
        iusto, accusantium nostrum magni quidem nihil pariatur omnis quam
        aperiam, at maxime cupiditate. Debitis, hic maxime non veritatis laborum
        consectetur aliquid vel ea iste consequatur distinctio natus et id
        laboriosam optio delectus beatae iure quos. Ut, rem dolor fugiat
        sapiente, commodi repellendus facilis quidem porro praesentium
        laboriosam explicabo cupiditate libero est. Explicabo perferendis
        accusamus ipsa, aliquid possimus magni perspiciatis nulla quis rem
        consectetur corrupti dicta hic praesentium sint quos eum facilis, est,
        culpa id quasi accusantium! Obcaecati id laboriosam voluptatibus magnam,
        recusandae dolorum dolorem, ab eaque nam deleniti numquam tempora eius,
        non perspiciatis vel excepturi illum quae explicabo. Pariatur temporibus
        deserunt, doloremque magni dolores quae dolor maiores commodi. Unde
        alias tempore optio error, nam ex, totam odio dolores aperiam temporibus
        cumque accusamus! Obcaecati aliquid molestias ipsa cupiditate omnis
        nesciunt libero pariatur quae, ipsum doloremque saepe dolor? Totam quo
        harum provident. Illo quos nisi, aperiam nesciunt numquam recusandae
        cupiditate, ipsa nostrum architecto similique autem enim est magnam
        molestiae optio!
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
