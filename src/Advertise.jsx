import { HeadersSection } from "./Components/Advertise/HeadersSections";
import { ImageCarousel } from "./Components/Advertise/ImageCarousel";
import { Box } from "@mui/material";

export const Advertise = () => {

    return(
        <>
        <Box sx={{ backgroundColor: "#f5f5f5",  padding:"50px",  }} >

        <HeadersSection/> 
        <ImageCarousel /> 
        </Box>
        </>
    )
}