"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Slider.css";

function Slider() {
    return (
        <Swiper
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination, Autoplay]}
            className="image-slider mx-auto mx-sm-1 mx-md-3 rounded-2 text-white"
            // spaceBetween={50}
            slidesPerView={1}
            loop
            grabCursor
            observer
            observeParents
            speed={1000}
            autoplay={true}

            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <div
                    className="slider-image"
                    style={{
                        backgroundImage: `url(https://i.ebayimg.com/images/g/0HcAAOSwN15lfNqm/s-l1600.webp)`,
                    }}
                ></div>
                {/* <img
                    src="https://avatars.mds.yandex.net/get-market-adv/8777695/857277f7-511b-4b95-b669-373675ae44ed/1440x300"
                    alt=""
                /> */}
            </SwiperSlide>
            <SwiperSlide className="w-100">
                <div
                    className="slider-image"
                    style={{
                        backgroundImage: `url(/banner.png)`,
                    }}
                ></div>
                {/* <img
                    src=""
                    alt=""
                    className=""
                /> */}
            </SwiperSlide>

            <SwiperSlide>
                <div
                    className="slider-image"
                    style={{
                        backgroundImage: `url(https://i.ebayimg.com/images/g/YcMAAOSwe9plOUkU/s-l1600.webp)`,
                    }}
                ></div>
                {/* <img
                    src="https://avatars.mds.yandex.net/get-market-adv/8777695/857277f7-511b-4b95-b669-373675ae44ed/1440x300"
                    alt=""
                /> */}
            </SwiperSlide>
        </Swiper>
    );
}

export default Slider;
