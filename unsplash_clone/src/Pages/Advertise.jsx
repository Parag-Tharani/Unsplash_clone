import {HeadersSection} from "../components/Advertise/HeadersSections"

import { ImageCarousel } from "../components/Advertise/ImageCarousel";
import { Box } from "@mui/material";
import { NativeAdSection } from "../components/Advertise/NativeAdSection";
import { Audiance } from "../components/Advertise/Audiance";
import { Footer } from "../components/Advertise/Footer";

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