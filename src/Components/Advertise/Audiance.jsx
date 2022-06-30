import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import { Grid } from "@mui/material";

export const Audiance = () => {
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
          margin:"80px"
        }}
      >
        <Box
          sx={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",
            padding: "32px",
            backgroundColor: "black",
            borderRadius: "20px",
          }}
        >
          <Typography
            variant="h4"
            component="h4"
            sx={{ textAlign: "left", color: "white" }}
          >
            {" "}
            All Creative Professionals{" "}
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{ textAlign: "left", marginTop: "20px", color: "white" }}
          >
            {" "}
            Unsplash attracts all creative professionals, ranging from Fortune
            500 industry leaders to the growing demographic of professionals
            empowered by the democratization of creativity.{" "}
          </Typography>
        </Box>

        <Box
          sx={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",
            padding: "32px",
            backgroundColor: "#f5f5f5",
            borderRadius: "20px",
          }}
        >
          <Typography
            variant="h4"
            component="h4"
            sx={{ textAlign: "left", color: "black" }}
          >
            {" "}
            Targeting Capability
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{ textAlign: "left", marginTop: "20px", color: "black" }}
          >
            Geo-targeting ads, by safelisting or blocklisting desired countries
          </Typography>
        </Box>

        <Box
          sx={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",
            padding: "32px",
            backgroundColor: "#bd081c",
            borderRadius: "20px",
          }}
        >
          <Typography
            variant="h4"
            component="h4"
            sx={{ textAlign: "left", color: "white" }}
          >
            {" "}
            Up to 2.00% clickthrough rate
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{ textAlign: "left", marginTop: "20px", color: "white" }}
          >
            10x higher than Pinterest 3x higher than Dribbble
          </Typography>
        </Box>

        <Box
          sx={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",
            padding: "32px",
            backgroundColor: "#f5f5f5",
            borderRadius: "20px",
          }}
        >
          <Typography
            variant="h4"
            component="h4"
            sx={{ textAlign: "left", color: "black" }}
          >
            75%
          </Typography>
          <Typography
            variant="h5"
            component="p"
            sx={{ textAlign: "left", marginTop: "20px", color: "black" }}
          >
            of visitors are between the ages of 18–34
          </Typography>
        </Box>

        <Box
          sx={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",
            padding: "32px",
            backgroundColor: "#f5f5f5",
            borderRadius: "20px",
          }}
        >
          <Typography
            variant="h4"
            component="h4"
            sx={{ textAlign: "left", color: "black" }}
          >
            71%
          </Typography>
          <Typography
            variant="h5"
            component="p"
            sx={{ textAlign: "left", marginTop: "20px", color: "black" }}
          >
            of visitors have a university degree
          </Typography>
        </Box>

        <Box
          sx={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",
            padding: "32px",
            backgroundColor: "#f5f5f5",
            borderRadius: "20px",
          }}
        >
          <Typography
            variant="h4"
            component="h4"
            sx={{ textAlign: "left", color: "black" }}
          >
            51%
          </Typography>
          <Typography
            variant="h5"
            component="p"
            sx={{ textAlign: "left", marginTop: "20px", color: "black" }}
          >
            of our users have a household income of more than $100k/year
          </Typography>
        </Box>
      </Box>

      <Box sx={{
          display: "flex", 
          padding: "40px 20px", 
          borderRadius: "20px",
          backgroundColor: "black",
          margin: "80px", 
          alignItems: "center",
          justifyContent:"space-around"
      }}>
          <Box sx={{
              display: "flex",
              width:"50%",
              flexDirection:"column",
              alignItems:"flex-start",
              justifyContent:"left"
          }}>
              <Typography variant="h1" component="h2" sx={{ color:"white", fontSize:"80px", fontWeight:"700", textAlign:"left", marginBottom:"60px"}} > Ready to get Started ? </Typography>
              <Typography variant="h6" component="p" sx={{ color:"white", fontSize:"20px"}} > Not sure where to start? Email us directly  
              <a mailto="partnerships@unsplash.com" style={{ color:"grey", borderBottom:"2px solid grey" }} > partnerships@unsplash.com</a>
              </Typography>
          </Box>

          <Box >
          <Box
            component="a"
            style={{
                marginTop: "16px",
                marginBottom: "8px",
                backgroundColor: "white",
                color: "black",
                padding: "20px",
                borderRadius: "5px",
                fontSize: "20px",
                fontWeight: "500",
            }}
            >
            Get in touch with us
          </Box>
        </Box>

      </Box>
    </>
  );
};
