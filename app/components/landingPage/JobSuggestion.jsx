"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

function JobSuggestion() {
  return (
    <div className="my-8 flex justify-center">
      <div className="relative overflow-hidden">
        <Swiper
          dir="rtl"
          slidesPerView={4}
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          modules={[ Autoplay]}
          className="mySwiper"
          loop={true} // set the loop prop to true
          autoplay={{
            delay: 500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div className="w-44 h-44 rounded-xl border-gray-600 border-2"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-44 h-44 rounded-xl border-gray-600 border-2"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-44 h-44 rounded-xl border-gray-600 border-2"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-44 h-44 rounded-xl border-gray-600 border-2"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-44 h-44 rounded-xl border-gray-600 border-2"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-44 h-44 rounded-xl border-gray-600 border-2"></div>
          </SwiperSlide><SwiperSlide>
            <div className="w-44 h-44 rounded-xl border-gray-600 border-2"></div>
          </SwiperSlide><SwiperSlide>
            <div className="w-44 h-44 rounded-xl border-gray-600 border-2"></div>
          </SwiperSlide><SwiperSlide>
            <div className="w-44 h-44 rounded-xl border-gray-600 border-2"></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default JobSuggestion;
