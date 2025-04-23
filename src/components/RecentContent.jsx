import React from "react";
import poster from "../assets/Poster.png";
import poster2 from "../assets/Poster2.png";
const RecentContent = () => {
  return (
    <div className="bg-black pt-5">
      <div className="d-flex justify-content-center esport-text gap-2 pt-4 mt-5">
        <p>RECENT</p>
        <p className="partner-text">CONTENT</p>
      </div>
      <div className="d-flex justify-content-center flex-wrap recent-content pt-4 gap-4">
        <div className="d-flex flex-row flex-wrap justify-content-center align-items-center gap-4 w-100">
          <img
            src={poster}
            alt="poster1"
            className="img-fluid"
            style={{
              flex: "1 1 300px",
              maxWidth: "45%",
              height: "auto",
              objectFit: "cover",
            }}
          />
          <img
            src={poster2}
            alt="poster2"
            className="img-fluid"
            style={{
              flex: "1 1 300px",
              maxWidth: "45%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default RecentContent;
