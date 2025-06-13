import React from "react";

const TeamImage = ({ title, img1, img2, slogan }) => {
  return (
    <div className="p-4 bg-black">
      <div className="container">
        <div className=" align-items-center justify-content-center">
          <div className=" mb-4 mb-md-0">
            <div className="d-flex flex-column flex-md-row gap-3">
              <p
                className="title-text py-5 py-md-0"
                style={{
                  fontWeight: "600",
                  lineHeight: "100%",
                  background:
                    "radial-gradient(106.53% 2268.31% at 100% 69.88%, #B0B0B0 0%, rgba(213, 213, 213, 0.8) 50%, rgba(250, 250, 250, 0.4) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {title}
              </p>
              {slogan && (
                <p
                  className="text-secondary mt-2 mt-md-4"
                  style={{ fontSize: "32px", lineHeight: "140%" }}
                >
                  {slogan}
                </p>
              )}
            </div>
            <img
              src={img1}
              alt="Team 1"
              style={{
                width: "-webkit-fill-available", 
                height: "80vh", 
                objectFit: "cover",
                objectPosition: "top", 
                display: "block", 
              }}
            />
          </div>
          {/* <div className="col-12 col-md-6 second-img ">
            <img src={img2} alt="Team 2" className="img-fluid mt-3 mt-md-5 " />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TeamImage;
