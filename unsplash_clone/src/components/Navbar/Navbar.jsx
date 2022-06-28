import React from "react";
import "./NavbarCSS/Navbar.css"
import { Navbar1 } from "./Navbar1";
import { Navbar2 } from "./Navbar2";
import { Box } from "@mui/material";

export const Navbar = () => {
     return (
        <Box className="navbar">
         <Navbar1 />
         <Navbar2 />
        </Box>
     )
}