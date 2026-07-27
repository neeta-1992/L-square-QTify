import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Grid from '@mui/material/Grid';
import SectionCard from "../SectionCard/SectionCard";
import "./Carousel.css";
// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function Carousel({ albums, isSongs }) {
    return (
        <>
            <Swiper slidesPerView={7} spaceBetween={30} cssMode={true}
                navigation={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Mousewheel, Keyboard]} className="mySwiper" breakpoints={{
                    390: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}>
                {albums.map((album) => (
                    <SwiperSlide key={album.id}>
                        {isSongs ? <SectionCard title={album.title} image={album.image} chipLabel={`${album.likes} Likes`} /> : <SectionCard title={album.name} image={album.image} chipLabel={`${album.follows} Follows`} />}
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
