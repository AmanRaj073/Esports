import React from "react";
import ourPartnersLogo from '../assets/Group86.png'
const OurPartners = () => {
  return (
    <div className="bg-black">
      <div className="d-flex justify-content-center esport-text gap-2">
        <p>OUR</p>
        <p className="partner-text">PARTNERS</p>
      </div>
      <div className="d-flex justify-content-center esport-text gap-2 partner-bg">
        <img src={ourPartnersLogo } className="img-fluid" alt="partner-logo"/>
      </div>
    </div>
  );
};

export default OurPartners;
