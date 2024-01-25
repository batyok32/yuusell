"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./HelpSlider.css";
import HelpItem from "../HelpItem/HelpItem";

const productOptions = {
    breakpoints: {
        0: {
            slidesPerView: 3,
        },
        320: {
            slidesPerView: 4,
        },

        640: {
            slidesPerView: 6,
        },
        768: {
            slidesPerView: 7,
        },
        1024: {
            slidesPerView: 8,
        },
    },
};

function HelpSlider() {
    return (
        <Swiper
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Autoplay, Pagination]}
            // spaceBetween={50}
            // slidesPerView={5}
            grabCursor
            observer
            autoplay
            // observeParents
            speed={500}
            className="helpslider"
            {...productOptions}
        >
            <SwiperSlide>
                <HelpItem />
            </SwiperSlide>
            <SwiperSlide>
                <HelpItem />
            </SwiperSlide>
            <SwiperSlide>
                <HelpItem />
            </SwiperSlide>
            <SwiperSlide>
                <HelpItem />
            </SwiperSlide>
            <SwiperSlide>
                <HelpItem />
            </SwiperSlide>
            <SwiperSlide>
                <HelpItem />
            </SwiperSlide>
            <SwiperSlide>
                <HelpItem />
            </SwiperSlide>
            <SwiperSlide>
                <HelpItem />
            </SwiperSlide>
            <SwiperSlide>
                <HelpItem />
            </SwiperSlide>
            <SwiperSlide>
                <HelpItem />
            </SwiperSlide>
            <SwiperSlide>
                <HelpItem />
            </SwiperSlide>
        </Swiper>
    );
}

export default HelpSlider;
