import React from "react";
import ourPartnersLogo from "../assets/Brand1.png";
import ourPartnersLogo2 from "../assets/Brand2.png";
import backgroundlogo from "../assets/Our Partners.svg";
const OurPartners = () => {
  return (
    <div className="bg-black">
      <div className="d-flex justify-content-center esport-text gap-2">
        <p>OUR</p>
        <p className="partner-text">PARTNERS</p>
      </div>
      <div className="d-flex justify-content-center esport-text gap-2">
        <div className="position-relative w-100">
          {/* Background image - will be responsive */}
          <img src={backgroundlogo} className="img-fluid w-100" style={{ objectFit: 'cover' }} alt="" />

          {/* Centered foreground images */}
          <div className="position-absolute top-50 start-50 translate-middle d-flex gap-5">
            <img
              src={ourPartnersLogo}
              className="img-fluid"
              alt="partner-logo"
              style={{ width: '150px' }}
            />
            <img
              src={ourPartnersLogo2}
              className="img-fluid"
              alt="partner-logo"
              style={{ width: '150px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
