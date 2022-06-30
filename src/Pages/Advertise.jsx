import {HeadersSection} from "../Components/Advertise/HeadersSections"

import { ImageCarousel } from "../Components/Advertise/ImageCarousel";
import { Box } from "@mui/material";
import { NativeAdSection } from "../Components/Advertise/NativeAdSection";
import { Audiance } from "../Components/Advertise/Audiance";
import { Footer } from "../Components/Advertise/Footer";

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