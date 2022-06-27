import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Box from "@mui/material/Box";
import { Cards } from "./Card";
import Grid from "@mui/material/Grid"

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
      <ImageList
        sx={{
          display: "flex",
          height: "200px",
          padding: "25px",
          overflow: "hidden",
        }}
      >
        {images.map((item) => {
          return (
            <ImageListItem
              key={item.id}
              sx={{
                height: "100px",
              }}
            >
              <img alt="brand icons" src={item.ImgURL}></img>
            </ImageListItem>
          );
        })}
      </ImageList>

      <ImageList
        sx={{
          display: "flex",
          height: "200px",
          padding: "25px",
          overflow: "hidden",
        }}
      >
        {images.map((item) => {
          return (
            <ImageListItem
              key={item.id}
              sx={{
                height: "100px",
              }}
            >
              <img alt="brand icons" src={item.ImgURL}></img>
            </ImageListItem>
          );
        })}
      </ImageList>

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
        <Box component="h1" sx={{ fontSize: "48px", lineHeight: "0.0" }}>
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
      <Grid container spacing={2}
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
