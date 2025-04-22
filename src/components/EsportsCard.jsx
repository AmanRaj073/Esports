import React, { useEffect, useRef, useState } from "react";
import leftArrow from "../assets/leftarrow.svg";
import rightArrow from "../assets/righArrow.svg";
import backgroundLine from "../assets/S8ulAssets/Backgroundlines.png";
import pubglogo from "../assets/S8ulAssets/Active Card.png";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Navigation,
  Keyboard,
  Mousewheel,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

const EsportsCard = () => {
  const images = [pubglogo, pubglogo, pubglogo, pubglogo, pubglogo];
  const teamDescriptions = [
    "PUBG Mobile World Champions 2023",
    "Top BGMI Team in South Asia",
    "ESL Tournament Winners 2024",
    "PMPL Regional Champions",
    "PMGC Finalists 2023"
  ];

  const swiperRef = useRef(null);
  const nextBtnRef = useRef(null);
  const prevBtnRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Set up custom navigation buttons
    if (swiperRef.current && nextBtnRef.current && prevBtnRef.current) {
      nextBtnRef.current.addEventListener("click", () => {
        swiperRef.current.swiper.slideNext();
      });

      prevBtnRef.current.addEventListener("click", () => {
        swiperRef.current.swiper.slidePrev();
      });
    }

    return () => {
      // Cleanup event listeners
      if (nextBtnRef.current && prevBtnRef.current) {
        nextBtnRef.current.removeEventListener("click", () => {});
        prevBtnRef.current.removeEventListener("click", () => {});
      }
    };
  }, []);

  return (
    <div
      className="esport-section my-custom-slider"
      style={{ position: "relative" }}
    >
      <div className="">

      
      <h1 className="text-center text-white pt-5">ESPORTS</h1>
      <div className="my-custom-swiper-container">
        <Swiper
          ref={swiperRef}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          modules={[EffectCoverflow, Navigation, Keyboard, Mousewheel]}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 120,
            modifier: 4,
            slideShadows: true,
          }}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            560: {
              slidesPerView: 2.5,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="my-custom-swiper"
          onSlideChange={(swiper) => {
            // Apply active class to center slide
            document
              .querySelectorAll(".my-custom-swiper-slide")
              .forEach((slide) => {
                slide.classList.remove("my-custom-swiper-slide-active");
              });

            if (swiper.slides[swiper.activeIndex]) {
              swiper.slides[swiper.activeIndex].classList.add(
                "my-custom-swiper-slide-active"
              );
            }
            
            // Update active index
            setActiveIndex(swiper.realIndex);
          }}
          onInit={(swiper) => {
            // Initial setup for active slide
            if (swiper.slides[swiper.activeIndex]) {
              swiper.slides[swiper.activeIndex].classList.add(
                "my-custom-swiper-slide-active"
              );
            }
            // Set initial active index
            setActiveIndex(swiper.realIndex);
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide
              key={index}
              className={`my-custom-swiper-slide my-custom-swiper-slide--${
                (index % 6) + 1
              }`}
            >
              <div className="my-custom-slide-content">
                <div className="card-image-container relative">
                  <img
                    src={src}
                    alt={`pubg-team-${index}`}
                    className="card-image"
                  />
                  <div className="card-hover-text">
                    {teamDescriptions[index % teamDescriptions.length]}
                  </div>
                </div>
              </div>
              <div className="my-custom-author">
                <img src={src} alt="Team Logo" />
                <ul>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <li key={star}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="orange"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </li>
                  ))}
                </ul>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Navigation Buttons */}
      <div className="d-flex justify-content-center esport-text gap-3">
        <img
          ref={prevBtnRef}
          src={leftArrow}
          alt="left button"
          className="cursor-pointer my-custom-swiper-button-prev"
        />
        <img
          ref={nextBtnRef}
          src={rightArrow}
          alt="right button"
          className="cursor-pointer my-custom-swiper-button-next"
        />
      </div>

      {/* Background image */}
      <img
        src={backgroundLine}
        alt="background lines"
        className="background-lines"
        style={{
          position: "absolute",
          zIndex: -1,
          width: "100%",
          height: "100%", 
          objectFit: "cover",
          opacity: 0.5,
          top: 0,
          left: 0,
        }}
      />
      </div>
    </div>
  );
};

export default EsportsCard;