import React, { useRef } from "react";
import Divider from "../assets/S8ulAssets/Dividers.svg";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import poster from "../assets/Poster.png";
import poster2 from "../assets/Poster2.png";
import leftArrow from "../assets/leftarrow.svg";
import rightArrow from "../assets/righArrow.svg";
import Gallery from "../components/AllTeams";
const Content = () => {
  const scrollRef = useRef(null);

  const handlePrevious = () => {
    scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const handleNext = () => {
    scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };
  return (
    <div className="landing-page">
      {/* Transparent Navbar */}
      <Navbar />

      <section className="esportteam-section bg-black">
        <Gallery/>
      </section>

      <div className="bg-black">
      <div className=" container bg-black">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center px-3 px-md-5 py-4">
          {/* Heading */}
          <div className="d-flex flex-sm-row gap-2 gap-md-3">
            <h2 className="text-white" style={{ fontSize: "36px" }}>
              RECENT
            </h2>
            <h2 className="color-green" style={{ fontSize: "36px" }}>
              CONTENT
            </h2>
          </div>

          {/* Arrow Buttons */}
          <div className="d-flex gap-2 gap-md-3  mt-md-0">
            <img
              src={leftArrow}
              alt="left button"
              className="cursor-pointer"
              onClick={handlePrevious}
            />
            <img
              src={rightArrow}
              alt="right button"
              className="cursor-pointer"
              onClick={handleNext}
            />
          </div>
        </div>

        {/* Posters Section */}
        <div className="container d-flex flex-column flex-md-row justify-content-center pt-4 gap-4 gap-md-5">
          <div className="px-3">
            <img src={poster} alt="poster1" className="img-fluid w-100" />
            <p className="text-secondary fw-semibold mt-3">26HR AGO</p>
            <p className="text-white fw-semibold text-wrap">
              The Raid on S8UL | OMG🥵 Intl. Caster & Owner Shocked and
              Appreciate S8UL l How S8UL Anno. More Lineup🚀
            </p>
          </div>
          <div className="px-3">
            <img src={poster2} alt="poster2" className="img-fluid w-100" />
            <p className="text-secondary fw-semibold mt-3">26HR AGO</p>
            <p className="text-white fw-semibold">
              The Raid on S8UL | OMG🥵 Intl. Caster & Owner Shocked and
              Appreciate S8UL l How S8UL Anno. More Lineup🚀
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black p-3 p-md-5 d-flex justify-content-center">
        <img src={Divider} alt="divider" className="img-fluid" />
      </div>

      <Footer />
    </div>
    </div>
  );
};

export default Content;
