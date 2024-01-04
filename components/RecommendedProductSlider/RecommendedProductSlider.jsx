"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./RecommendedProductSlider.css";
import ProductCardV1 from "../ProductCardV1/ProductCardV1";

const productOptions = {
    slidesPerView: 6,

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        320: {
            slidesPerView: 2,
        },

        640: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 6,
        },
    },
};

function RecommendedProductSlider() {
    return (
        <Swiper
            navigation
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination, Navigation]}
            // spaceBetween={50}
            grabCursor
            observer
            autoplay
            // observeParents
            speed={500}
            className="recommendedProductSlider"
            {...productOptions}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <ProductCardV1 img="https://images-na.ssl-images-amazon.com/images/I/417OJaY3DAL._AC_UL450_SR450,320_.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <ProductCardV1 img="https://images-na.ssl-images-amazon.com/images/I/417OJaY3DAL._AC_UL450_SR450,320_.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <ProductCardV1 img="https://images-na.ssl-images-amazon.com/images/I/417OJaY3DAL._AC_UL450_SR450,320_.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <ProductCardV1 img="https://images-na.ssl-images-amazon.com/images/I/417OJaY3DAL._AC_UL450_SR450,320_.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <ProductCardV1 img="https://images-na.ssl-images-amazon.com/images/I/417OJaY3DAL._AC_UL450_SR450,320_.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <ProductCardV1 img="https://images-na.ssl-images-amazon.com/images/I/417OJaY3DAL._AC_UL450_SR450,320_.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <ProductCardV1 img="https://images-na.ssl-images-amazon.com/images/I/417OJaY3DAL._AC_UL450_SR450,320_.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <ProductCardV1 img="https://images-na.ssl-images-amazon.com/images/I/417OJaY3DAL._AC_UL450_SR450,320_.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <ProductCardV1 img="https://images-na.ssl-images-amazon.com/images/I/417OJaY3DAL._AC_UL450_SR450,320_.jpg" />
            </SwiperSlide>
        </Swiper>
    );
}

export default RecommendedProductSlider;
