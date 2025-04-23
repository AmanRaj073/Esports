import React from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import TeamImage from "../components/TeamImage";
import TeamCards from "../components/TeamsCards";
import Main1img from "../assets/Main1.png";
import Main2img from "../assets/Main2.png";
import Main3img from "../assets/Main4.png";
import Main4img from "../assets/Main3.png";
import Main5img from "../assets/Main5.png";
import Main6img from "../assets/Main6.png";
import Main7img from "../assets/Main7.png";

import Team1 from "../assets/Person1.png";
import Team2 from "../assets/Person2.png";
import Team3 from "../assets/Person3.png";
import Team4 from "../assets/Person4.png";
import Team5 from "../assets/Person5.png";

import Team11 from "../assets/PersonV2.png";
import Team12 from "../assets/PersonV2.2.png";
import Team13 from "../assets/PersonV2.3.png";
import Team14 from "../assets/PersonV2.4.png";
import Team15 from "../assets/PersonV2.5.png";

import Team21 from "../assets/PersonV3.png";
import Team22 from "../assets/PersonV3.2.png";
import Team23 from "../assets/PersonV3.3.png";
import Team24 from "../assets/PersonV3.3.png";
import Team25 from "../assets/PersonV3.png";

import Team31 from "../assets/Perosn4.1.png";
import Team32 from "../assets/Perosn4.2.png";
import Team33 from "../assets/Perosn4.3.png";
import Team34 from "../assets/PersonV4.png";
import Team35 from "../assets/Person4.5.png";

import Divider1 from "../assets/S8ulAssets/Container Divider.png";
import Divider from "../assets/S8ulAssets/Dividers.svg";
const teams = [
  { image: Team11, title: "GHOSTY" },
  { image: Team12, title: "SCRAP" },
  { image: Team13, title: "HYDRA" },
  { image: Team14, title: "DAVID" },
  { image: Team15, title: "ENVOY" },
];
const teams2 = [
  { image: Team1, title: "GHOSTY" },
  { image: Team2, title: "SCRAP" },
  { image: Team3, title: "HYDRA" },
  { image: Team4, title: "DAVID" },
  { image: Team5, title: "ENVOY" },
];
const teams3 = [
  { image: Team21, title: "GHOSTY" },
  { image: Team22, title: "SCRAP" },
  { image: Team23, title: "HYDRA" },
  { image: Team24, title: "DAVID" },
  { image: Team25, title: "ENVOY" },
];
const teams4 = [
  { image: Team31, title: "GHOSTY" },
  { image: Team32, title: "SCRAP" },
  { image: Team33, title: "HYDRA" },
  { image: Team34, title: "DAVID" },
  { image: Team35, title: "ENVOY" },
];

const Esports = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <section className="esportteam-section  bg-black ">
        <TeamImage
          img1={Main1img}
          img2={Main2img}
          title="BGMI"
          slogan=" Hydra, Scrap, and Envoy join Ghosty to form the 2025 LA Thieves
              Roster."
        />
      </section>
      <section className="team-members-section bg-black d-flex justify-content-center pt-5">
        <TeamCards teams={teams2} />
      </section>

      {/* Divider */}
      <div className="bg-black  p-4 d-flex justify-content-center">
        <div className="container">
        <img src={Divider1} className="img-fluid mt-4" alt="" />
        </div>
      </div>

      <section className=" bg-black">
        <TeamImage img1={Main4img} img2={Main3img} title="POKEMON UNITE" />
      </section>
      <section className="team-members-section bg-black d-flex justify-content-center pt-5">
        <TeamCards teams={teams} />
      </section>

      {/* Divider */}
      <div className="bg-black  p-4 d-flex justify-content-center">
        <div className="container">
        <img src={Divider1} className="img-fluid mt-4" alt="" />
        </div>
      </div>

      <section className=" bg-black">
        <TeamImage img1={Main5img} img2={Main6img} title="APEX LEGENDS" />
      </section>
      <section className="team-members-section bg-black d-flex justify-content-center pt-5">
        <TeamCards teams={teams3} />
      </section>

      {/* Divider */}
      <div className="bg-black  p-4 d-flex justify-content-center">
        <div className="container">
        <img src={Divider1} className="img-fluid mt-4" alt="" />
        </div>
      </div>

      <section className="esportteam-section  bg-black ">
        <TeamImage img1={Main1img} img2={Main2img} title="CODM" />
      </section>
      <section className="team-members-section bg-black d-flex justify-content-center pt-5">
        <TeamCards teams={teams2} />
      </section>

      {/* Divider */}
      <div className="bg-black  p-4 d-flex justify-content-center">
        <div className="container">
        <img src={Divider1} className="img-fluid mt-4" alt="" />
        </div>
      </div>


      <section className="esportteam-section  bg-black ">
        <TeamImage img1={Main7img} img2={Main2img} title="VOLRANT" />
      </section>
      <section className="team-members-section bg-black d-flex justify-content-center pt-5">
        <TeamCards teams={teams4} />
      </section>

      {/* Divider */}
      <div className="bg-black p-4 d-flex justify-content-center">
        <img src={Divider} className="img-fluid mt-4" alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default Esports;
