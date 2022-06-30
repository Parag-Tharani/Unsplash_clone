import { Box } from "@mui/material";
import React from "react";

export const NativeAdSection = () => {
  const [icons1, setIcons1] = React.useState([]);
  const [icons2, setIcons2] = React.useState([]);

  const getIcons1 = async () => {
    let res = await fetch("http://localhost:3000/icons1");
    let data = await res.json();
    console.log(data);
    setIcons1(data);
  };

  const getIcons2 = async () => {
    let res = await fetch("http://localhost:3000/icons2");
    let data = await res.json();
    console.log(data);
    setIcons2(data);
  };

  React.useEffect(() => {
    getIcons1();
    getIcons2();
  }, []);

  return (
    <>
      <Box sx={{ backgroundColor: "white", width: "100%", overflow: "hidden" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
            marginTop: "50px",
            marginBottom: "70px",
          }}
        >
          <Box component="h1" sx={{ fontSize: "48px", lineHeight: "35px" }}>
            Native Advertising
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
            Generate brand lift unseen on any other platform. It works simply by
            sharing your brand’s beautiful content on Unsplash in targeted
            search results. And in exchange, creators of the internet share your
            content with their audiences — in relevant trusted places.
          </Box>
        </Box>

        <Box
          component="img"
          sx={{ width: "110%", height: "100%" }}
          src="https://unsplash-assets.imgix.net/marketing/vertise/native-banner.png?auto=format&fit=crop&q=60"
        ></Box>
        <Box component="p" sx={{ margin: "50px" }}>
          {" "}
          Trusted by the world’s biggest brands{" "}
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icons1.map((item) => {
            return (
              <Box sx={{ padding: "20px" }} key={item.id}>
                <img style={{ width: "100%" }} src={item.iconURL}></img>
              </Box>
            );
          })}
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icons2.map((item) => {
            return (
              <Box sx={{ padding: "20px" }} key={item.id}>
                <img style={{ width: "100%" }} src={item.iconURL}></img>
              </Box>
            );
          })}
        </Box>

        <Box
          sx={{
            display: "flex",
            marginBottom: "50px",
            backgroundColor:"#f5f5f5",
            margin: "50px 100px",
            padding: "20px"
          }}
        >
          <Box sx={{ display:"flex", flexDirection:"column", paddingLeft:"40px", alignItems:"flex-start",  justifyContent:"center" }}>
            <Box component="h1" sx={{ textAlign: "left", fontSize:"28px", marginBottom:"10px"}} > Don’t have images readily available? </Box>
            <Box component="p" sx={{ width: "70%", textAlign:"left", fontSize:"18px",  lineHeight:"30px" }} >
              {" "}
              Take advantage of Unsplash Studio: work with Unsplash
              photographers to create custom content specifically intended for
              your campaign.
            </Box>
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
            Get in touch to learn more about studio
          </Box>
          </Box>

          <Box component="img" 
          sx={{ width: "600px" }}
          src="https://unsplash-assets.imgix.net/marketing/vertise/studio.png?auto=format&fit=crop&q=60"></Box>
        </Box>
      </Box>
    </>
  );
};
