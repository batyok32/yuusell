"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

import "./ProductDetailSliderV2.css";

function ProductDetailSliderV2() {
    return (
        <Swiper
            // navigation
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            // spaceBetween={50}
            slidesPerView={4}
            grabCursor
            observer
            autoplay
            // observeParents
            speed={500}
            className="productdetailslider2"
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <div>
                    <img className="img-fluid" src="/s-l140.jpg" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img className="img-fluid" src="/s-l140.jpg" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img className="img-fluid" src="/s-l140.jpg" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img className="img-fluid" src="/s-l140.jpg" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img className="img-fluid" src="/s-l140.jpg" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img className="img-fluid" src="/s-l140.jpg" alt="" />
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

export default ProductDetailSliderV2;
