import React from "react";
import { Typography } from "@mui/material";
import {styled} from "@mui/material";
import {Button} from "@mui/material"
import {useNavigate} from "react-router-dom"

const ColorButton = styled(Button)(({ theme }) => ({
    color: "white",
    backgroundColor: "black",
    marginTop: "20px",
    padding: "15px",
    fontWeight: "700",
    fontSize:"15px",
  
    '&:hover': {
      backgroundColor: "white",
      color: "black",
      border: "2px solid black"
    
    },
  }));

export const SuccessForm = () => {

    const navigate = useNavigate()

  return (
    <>
      <div id="section-5">
        <Typography variant="h3" component="p" > Thanks!  </Typography>
        <br /> 
        <Typography variant="h3" component="p" > One of our representatives will contact you shortly.</Typography>  
        <ColorButton onClick={() => navigate("/")} > Back to Unsplash </ColorButton>
      </div>
    </>
  );
};
