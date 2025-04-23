import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-5">
      <div className="container footer-bg">
        <div className="row">
          {/* Left: Logo & Description */}
          <div className="col-12 col-md-8 mb-4 bg-black">
            <img src={logo} alt="S8UL Logo" className="mb-3" style={{ height: 60 }} />
            <p>
              S8UL IS A GLOBAL NAME IN ESPORTS AND GAMING CONTENT, HEADQUARTERED IN MUMBAI, INDIA.
            </p>
            {/* Social Icons */}
            <div className="d-flex gap-3 mt-3">
              <a href="#"><i className="fab fa-facebook-square fa-2x text-white" /></a>
              <a href="#"><i className="fab fa-instagram fa-2x text-white" /></a>
              <a href="#"><i className="fab fa-youtube fa-2x text-white" /></a>
            </div>
          </div>

          {/* Right: Quick Links + About */}
          <div className="col-12 col-md-4 bg-black">
            <div className="d-flex flex-column flex-md-row justify-content-between">
              {/* Quick Links */}
              <div className="mb-4 mb-md-0 me-md-5">
                <h5 className="dm-font">Quick links</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="#" className="text-muted text-light-emphasis text-decoration-none dm-font">Web</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-muted text-light-emphasis text-decoration-none dm-font">Hub Admin</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-muted text-light-emphasis text-decoration-none dm-font">Playoff</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-muted text-light-emphasis text-decoration-none dm-font">Playoff</a>
                  </li>
                </ul>
              </div>

              {/* About */}
              <div>
                <h5 className="dm-font">About</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="#" className="text-muted text-light-emphasis text-decoration-none dm-font">React</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-muted text-light-emphasis text-decoration-none dm-font">Node JS</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-muted text-light-emphasis text-decoration-none dm-font">Javascript</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-muted text-light-emphasis text-decoration-none dm-font">Flutter</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
