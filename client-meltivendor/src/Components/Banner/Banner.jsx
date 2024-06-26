import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';
// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
export default function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="realtive">
          <img src="https://i.ibb.co/YZHx7xc/product1.jpg" />
          <div className="absolute top-0 h-full bg-solas w-full">
            <div className="absolute top-[30%] w-full text-center space-y-5">
            <h1 className="text-3xl font-[700] text-white">Hello This Word!</h1>
            <p className="text-white">this is my homw shope</p>
            <button className="border border-white px-[35px] py-[12px] text-white">Bye Now</button>
            </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          
          <div className="realtive">
          <img src="https://i.ibb.co/ZXDnzfw/Product2.jpg" />
          <div className="absolute top-0 h-full bg-solas w-full">
            <div className="absolute top-[30%] w-full text-center space-y-5">
            <h1 className="text-3xl font-[700] text-white">Hello This Word!</h1>
            <p className="text-white">this is my homw shope</p>
            <button className="border border-white px-[35px] py-[12px] text-white">Bye Now</button>
            </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          
          <div className="realtive">
          <img src="https://i.ibb.co/HNtLQGG/product3.jpg" />
          <div className="absolute top-0 h-full bg-solas w-full">
            <div className="absolute top-[30%] w-full text-center space-y-5">
            <h1 className="text-3xl font-[700] text-white">Hello This Word!</h1>
            <p className="text-white">this is my homw shope</p>
            <button className="border border-white px-[35px] py-[12px] text-white">Bye Now</button>
            </div>
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
