import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import demoProduct from "../assets/image.png";
const ImageCarsousel = () => {
  const images = [demoProduct, demoProduct, demoProduct];

  return (
    <div className="shop-section">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="image-wrapper">
              <img
                src={img}
                alt={`Slide ${i + 1}`}
                style={{
                  height: "600px",
                  width: "100%",
                  objectFit: "contain", // Ensures full image is visible
                }}
              />
              {/* <div className="dim-overlay" /> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarsousel;
