import { HeadersSection } from "./HeadersSections";
import { ImageCarousel } from "./ImageCarousel";
import { Box } from "@mui/material";
import { NativeAdSection } from "./NativeAdSection";
import { Audiance } from "./Audiance";
import { Footer } from "./Footer";

export const Advertise = () => {

    return(
        <>
        <Box sx={{ backgroundColor: "#f5f5f5",  padding:"50px",  }} >

        <HeadersSection/> 
        <ImageCarousel />  
        </Box>
        <NativeAdSection />
        <Audiance /> 
        <Footer />
        </>
    )
}