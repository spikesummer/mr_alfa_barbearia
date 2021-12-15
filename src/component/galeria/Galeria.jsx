import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import SwiperCore, {Navigation, Pagination, Thumbs, Controller, EffectFade, Autoplay} from 'swiper';
import 'swiper/swiper-bundle.css';
import { Heading } from '../heading/Heading';
import { Box } from "./Galeriastyle";


SwiperCore.use([Navigation, Pagination, Thumbs, Controller, EffectFade, Autoplay]);

export const Galeria = () => {
   
    return(
        <section id="galeria">
            <Heading textBefore="Galeria de" span="fotos"/>

            <Swiper 
                id='main'
                tag="section" 
                wrapperTag="ul" 
                navigation 
                pagination 
                autoplay
                loop={true}
                spaceBetween={1} 
                slidesPerView={1} 
            >
                <SwiperSlide tag="li"  style={{listStyle: 'none', display: "flex", justifyContent: "center"}}>
                    <Box>
                        <img src="img/photo-1.jpg" alt="photo1"/>
                    </Box>
                </SwiperSlide>
                <SwiperSlide tag="li" style={{listStyle: 'none', display: "flex", justifyContent: "center"}}>
                    <Box>
                        <img src="img/photo-2.jpg" alt="photo2"/>
                    </Box>
                </SwiperSlide>
                <SwiperSlide tag="li" style={{listStyle: 'none', display: "flex", justifyContent: "center"}}>
                    <Box>
                        <img src="img/photo-3.jpg" alt="photo3"/>
                    </Box>
                </SwiperSlide>
                <SwiperSlide tag="li" style={{listStyle: 'none', display: "flex", justifyContent: "center"}}>
                    <Box>
                        <img src="img/photo-4.jpg" alt="photo4"/>
                    </Box>
                </SwiperSlide>
                <SwiperSlide tag="li" style={{listStyle: 'none', display: "flex", justifyContent: "center"}}>
                    <Box>
                        <img src="img/photo-5.jpg" alt="photo5"/>
                    </Box>
                </SwiperSlide>
                <SwiperSlide tag="li" style={{listStyle: 'none', display: "flex", justifyContent: "center"}}>
                    <Box>
                        <img src="img/photo-6.jpg" alt="photo6"/>
                    </Box>
                </SwiperSlide>
                <SwiperSlide tag="li" style={{listStyle: 'none', display: "flex", justifyContent: "center"}}>
                    <Box>
                        <img src="img/photo-8.jpg" alt="photo8"/>
                    </Box>
                </SwiperSlide>
            </Swiper>
            
        </section>
    )
}