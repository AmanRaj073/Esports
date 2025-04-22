import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import demo1 from "../assets/demo3.jpg";
import demo2 from "../assets/demo1.jpg";
import demo3 from "../assets/demo2.jpg";

const HomeSlider = () => {
  const images = [demo1, demo2, demo3, demo1, demo2, demo3];

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={0}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {images.map((img, i) => (
        <SwiperSlide key={i}>
          <div className="image-wrapper">
            <img src={img} alt={`Slide ${i + 1}`} />
            <div className="dim-overlay" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeSlider;
