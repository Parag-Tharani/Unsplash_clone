import React from "react";
import Box from "@mui/material/Box";
import { Cards } from "./Card";
import Grid from "@mui/material/Grid"
import "./ImageCarousel.css"

export const ImageCarousel = () => {
  const [images, setImages] = React.useState([]);

  const getImages = async () => {
    let res = await fetch("http://localhost:3000/Img");
    let data = await res.json();

    console.log(data);
    setImages(data);
  };

  React.useEffect(() => {
    getImages();
  }, []);

  

  return (
    <>
    <div className="Slider">
     {images.map((item) => {
         return(
             
             <div className="slide-track">
                 <div className="slide">
                        <img alt="carousel" src={item.ImgURL} />
                 </div>
             </div>
             
             )
            })}
    </div>

    <div className="Slider">
     {images.map((item) => {
         return(
             
             <div className="slide-track">
                 <div className="slide">
                    <img alt="carousel" src={item.ImgURL} />
                 </div>
             </div>
             
             )
            })}
    </div>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          marginTop: "200px",
          marginBottom: "70px",
        }}
      >
        <Box component="h1" sx={{ fontSize: "48px", lineHeight: "0.2" }}>
          Direct Advertising
        </Box>
        <Box
          component="p"
          sx={{
            width: "730px",
            textAlign: "center",
            fontSize: "20px",
            margin: "16px 0",
            fontWeight: "500",
          }}
        >
          Direct ads are performance-driven placements. Built to generate
          traffic for brands and convert on customer acquisition KPIs. We create
          maximum impact with the following four paid placement opportunities
        </Box>
      </Box>
      <Box
        component="img"
        src="https://unsplash-assets.imgix.net/marketing/vertise/direct.png?auto=format&fit=crop&q=60"
        sx={{
          width: "100%",
          marginTop: "50px",
        }}
      ></Box>
      <Grid container spacing={6}
      sx={{
          alignItems: "center",
          justifyContent: "center"
      }} >
        <Cards />
      </Grid>
      <Box style={{ marginTop:"120px", }} >

      <Box
            component="a"
            style={{
                marginTop: "16px",
                marginBottom: "8px",
                backgroundColor: "#111",
                color: "#fff",
                padding: "16px",
                borderRadius: "5px",
                fontSize: "16px",
                fontWeight: "600",
            }}
            >
            Get in touch with us
          </Box>
        </Box>
    </>
  );
};
