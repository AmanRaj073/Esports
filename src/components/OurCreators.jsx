import React from "react";
import frame1 from "../assets/Achievement.png";
import leftArrow from "../assets/S8ul/S8ul/Left arrow.svg";
import rightArrow from "../assets/S8ul/S8ul/Right arrow.svg";

const OurCreators = () => {
  return (
    <div className="bg-black w-100 py-4 text-white">
      {/* Title + Image for Mobile */}
      <div className="container d-md-none">
        <div className="d-flex justify-content-center align-items-center flex-wrap gap-2 py-4">
          <img
            src={leftArrow}
            alt="Left Arrow"
            className="img-fluid left-arrow"
            style={{ maxHeight: 30 }}
          />
          <button className="our-creators-btn text-nowrap px-3 py-2">
            OUR CREATORS
          </button>
          <img
            src={rightArrow}
            alt="Right Arrow"
            className="img-fluid right-arrow"
            style={{ maxHeight: 30 }}
          />
        </div>

        {/* Image below button row */}
        <img src={frame1} alt="frame1" className="img-fluid w-100 mb-3" />

        {/* Text below image */}
        <div className="text-center px-2">
          <div className="d-flex justify-content-center gap-2">
            <p className="mb-0 achiement">OUR</p>
            <p className="mb-0 achiement-text">ACHIEVEMENTS</p>
          </div>
          <p className="fs-6 mt-2">
            Driving real results through impactful milestones and meaningful
            progress.
          </p>
        </div>
      </div>

      {/* Desktop Layout with Overlay */}
      <div className="container d-none d-md-block">
        {/* Title Section */}
        <div className="d-flex justify-content-center align-items-center gap-2 pt-5 mt-5">
          <img
            src={leftArrow}
            alt="Left Arrow"
            className="d-none d-md-block img-fluid"
            style={{ maxHeight: 30 }}
          />
          <button className="our-creators-btn text-nowrap px-3 py-2">
            OUR CREATORS
          </button>
          <img
            src={rightArrow}
            alt="Right Arrow"
            className="d-none d-md-block img-fluid"
            style={{ maxHeight: 30 }}
          />
        </div>

        {/* Image with Overlay Text */}
        <div className="position-relative d-flex justify-content-center mt-4 px-5">
          <img src={frame1} alt="frame1" className="img-fluid w-100" />
          <div className="position-absolute top-50 start-50 translate-middle text-center d-flex flex-column align-items-center esport-text px-2">
            <div className="d-flex justify-content-center flex-wrap gap-2">
              <p className="mb-0 achiement">OUR</p>
              <p className="mb-0 achiement-text">ACHIEVEMENTS</p>
            </div>
            <p className="fs-4 mt-2">
              Driving real results through impactful milestones and meaningful
              progress.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCreators;
