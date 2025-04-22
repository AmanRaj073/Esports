import React from "react";
import Mortal from "../assets/FrameMortal.png";
import blackleft from "../assets/BlackLeft.png";
import blaclkright from "../assets/BlackRight.png";

const OurBlogspot = () => {
  return (
    <div className="container pt-4 pb-4">
      {/* Navigation Arrows */}
      <div className="d-flex justify-content-end gap-3 mb-3">
        <img src={blackleft} className="cursor-pointer" alt="Left" />
        <img src={blaclkright} className="cursor-pointer" alt="Right" />
      </div>

      {/* Main Blog Section */}
      <div className="row g-0 border mb-5 d-flex align-items-stretch">
        {/* Text Area */}
        <div
          className="col-12 col-md-6 p-4 position-relative text-center text-md-start d-flex flex-column justify-content-center"
          style={{
            borderRight: "1px solid rgb(218 211 211)",
          }}
        >
          {/* Corner decorations (optional) */}
          <div className="corner top-left" />
          <div className="corner top-right" />
          <div className="corner bottom-left" />
          <div className="corner bottom-right" />

          <p
            className="mb-0"
            style={{
              fontSize: "60px",
              lineHeight: "1.2",
              fontWeight: "600",
              fontStyle: "italic",
            }}
          >
            OUR
          </p>
          <p
            className="mb-0"
            style={{
              fontSize: "60px",
              fontWeight: "600",
              color: "#C7F242",
              fontStyle: "italic",
            }}
          >
            BLOGSPOT
          </p>
        </div>
        {/* Image Section FIRST so it defines height */}
        <div className="col-12 col-md-6 p-3 d-flex align-items-stretch">
          <div className="position-relative w-100 image-hover-box">
            <img
              src={Mortal}
              alt="Mortal"
              className="img-fluid w-100 image-hover-img"
              style={{ objectFit: "cover" }}
            />
            <p className="hover-text m-0 d-flex">
              2025 Grand Esports Event <div className="progress-line"></div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlogspot;
