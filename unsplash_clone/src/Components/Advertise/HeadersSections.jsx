import React from "react";
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";

export const HeadersSection = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          bgcolor: "background.paper",
          gap: "100px",
          marginTop: "80px",
          justifyContent: "space-around",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column" },
            alignItems: { sm: "center", md:"flex-start" },
            justifyContent: {sm: "left", md: "left"}
          }}
        >
          <Box
            component="h2"
            sx={{
              fontSize: "48px",
              lineHeight: "0.0",
            }}
          >
            Advertise on Unsplash
          </Box>

          <Box
            component="p"
            style={{
              fontSize: "20px",
              margin: "16px 0",
              fontWeight: "500",

            }}
          >
            The world’s most popular creative platform.
          </Box>
          <Box
            component="div"
            style={{
              marginTop: "16px",
              marginBottom: "8px",
              backgroundColor: "#111",
              color: "#fff",
              padding: "16px",
              borderRadius: "5px",
              fontSize: "16px",
              fontWeight: "600",
            }}>
            <Link to="/Inputform" style={{ color: "white" }}>
              Get in touch with us
            </Link>  
          </Box>
        </Box>
        <Box>
          <Box
            component="img"
            src="https://unsplash-assets.imgix.net/marketing/vertise/header.png?auto=format&fit=crop&q=60"
            sx={{
                width:"600px",
                height: "600px",

            }}
          ></Box>
        </Box>
      </Box>
      <Box sx={{
          display:"flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "17px",
          marginTop: "80px"

      }} >Join the world’s biggest brands that we’re proud to call partners</Box>

    </>
  );
};
