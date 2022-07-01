import React from "react";
import { Box, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "40px",
          margin: "80px",
          color: "#767676",
          borderBottom: "1px solid grey",
        }}
      >
        <Box sx={{ textAlign: "left" }}>
          <Typography
            variant="h6"
            component="p"
            sx={{ fontWeight: "700", color: "black", padding: "10px 0" }}
          >
            {" "}
            Unsplash
          </Typography>

          <Typography variant="p" component="p">
            Beautiful, free images gifted by the world’s most generous community
            of photographers. Better than any royalty free or stock photos.
          </Typography>
          <Typography sx={{ padding: "10px 0" }}>About</Typography>
          <Typography sx={{ padding: "10px 0" }}>Blog</Typography>
          <Typography sx={{ padding: "10px 0" }}>Community</Typography>
          <Typography sx={{ padding: "10px 0" }}>Join the team</Typography>
          <Typography sx={{ padding: "10px 0" }}>Developers/API</Typography>
          <Typography sx={{ padding: "10px 0" }}>Press</Typography>
          <Typography sx={{ padding: "10px 0" }}>Help Center</Typography>
        </Box>
        <Box sx={{ textAlign: "left" }}>
          <Typography
            variant="h6"
            component="p"
            sx={{ fontWeight: "700", color: "black", padding: "10px 0" }}
          >
            {" "}
            Product
          </Typography>
          <Typography sx={{ padding: "10px 0" }}>Explore</Typography>
          <Typography sx={{ padding: "10px 0" }}>Unsplash Awards</Typography>
          <Typography sx={{ padding: "10px 0" }}>
            Unsplash for Education
          </Typography>
          <Typography sx={{ padding: "10px 0" }}>Unsplash for iOS</Typography>
          <Typography sx={{ padding: "10px 0" }}>Apps and Plugins</Typography>
        </Box>

        <Box sx={{ textAlign: "left", marginBottom: "50px" }}>
          <Typography
            variant="h6"
            component="p"
            sx={{ fontWeight: "700", color: "black", padding: "10px 0" }}
          >
            Popular
          </Typography>
          <Typography sx={{ padding: "10px 0" }}>Backgrounds</Typography>
          <Typography sx={{ padding: "10px 0" }}>Free Images</Typography>
          <Typography sx={{ padding: "10px 0" }}>Free Stock Photos</Typography>
          <Typography sx={{ padding: "10px 0" }}>
            Happy Birthday Images
          </Typography>
          <Typography sx={{ padding: "10px 0" }}>Cool Photos</Typography>
          <Typography sx={{ padding: "10px 0" }}>Nature Pictures</Typography>
          <Typography sx={{ padding: "10px 0" }}>Black Backgrounds</Typography>
          <Typography sx={{ padding: "10px 0" }}>White Backgrounds</Typography>
          <Typography sx={{ padding: "10px 0" }}>Textures</Typography>
          <Typography sx={{ padding: "10px 0" }}>
            Desktop Backgrounds
          </Typography>
        </Box>

        <Box sx={{ textAlign: "left" }}>
          <Typography
            variant="h6"
            component="p"
            sx={{ fontWeight: "700", color: "black", padding: "10px 0" }}
          >
            Wallpapers
          </Typography>
          <Typography sx={{ padding: "10px 0" }}>HD Wallpapers</Typography>
          <Typography sx={{ padding: "10px 0" }}>4k Wallpapers</Typography>
          <Typography sx={{ padding: "10px 0" }}>iPhone Wallpapers</Typography>
          <Typography sx={{ padding: "10px 0" }}>Cool Wallpapers</Typography>
          <Typography sx={{ padding: "10px 0" }}>Cute Wallpapers</Typography>
          <Typography sx={{ padding: "10px 0" }}>Live Wallpapers</Typography>
          <Typography sx={{ padding: "10px 0" }}>PC Wallpapers</Typography>
          <Typography sx={{ padding: "10px 0" }}>Black Wallpapers</Typography>
          <Typography sx={{ padding: "10px 0" }}>iPad Wallpapers</Typography>
          <Typography sx={{ padding: "10px 0" }}>Desktop Wallpapers</Typography>
        </Box>
      </Box>

      <Box sx={{ 
          display:"flex",
          margin:"80px"
       }}>
          <Typography sx={{ paddingRight: "40px"}} > Privacy Policy </Typography>
            <Typography sx={{ paddingRight: "40px"}} >Terms</Typography>
            <Typography sx={{ paddingRight: "40px"}} >Security</Typography>
      </Box>
    </>
  );
};
