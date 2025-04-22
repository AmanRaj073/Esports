import React from "react";
import frame1 from "../assets/Achievement.png";
import leftArrow from "../assets/S8ul/S8ul/Left arrow.svg";
import rightArrow from "../assets/S8ul/S8ul/Right arrow.svg";
const OurCreators = () => {
  return (
    <div className="bg-black w-100 pt-4">
      <div className="d-flex justify-content-center gap-2 our-creators w-100 pt-5 mt-5">
        <img src={leftArrow} alt="Left Arrow" />
        <button className="our-creators-btn text-nowrap">OUR CREATORS</button>
        <img src={rightArrow} alt="Right Arrow" />
      </div>

      <div className="position-relative d-flex justify-content-center mt-4 p-5">
        <img src={frame1} alt="frame1" className="img-fluid px-5"  />
        <div className="position-absolute container top-50 start-50 translate-middle text-center d-flex flex-column align-items-center esport-text">
          <div className="d-flex  gap-2">
            <p className="mb-0 achiement">OUR</p>
            <p className="mb-0 achiement-text">ACHIEVEMENTS</p>
          </div>
          <p className="fs-4">
            Driving real results through impactful milestones and meaningful
            progress.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurCreators;
