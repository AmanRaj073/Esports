import Navbar from "../common/Navbar";
import HomeSlider from "../components/HomeSlider";

import EsportsCard from "../components/EsportsCard";
import Divider1 from '../assets/S8ulAssets/Container Divider.png'
import OurPartners from "../components/OurPartners";
import RecentContent from "../components/RecentContent";
import OurCreators from "../components/OurCreators";
import OurBlogspot from "../components/OurBlogspot";
import Divider from "../assets/S8ulAssets/Dividers.svg"
import Footer from "../common/Footer";
export default function EsportsLandingPage() {
  return (
    <div className="landing-page">
      {/* Transparent Navbar */}
      <Navbar />

      {/* Slider Container */}
      <HomeSlider />

      {/* Esports Card */}
      <EsportsCard />

      {/* Section Divider */}
      <div className="bg-black p-4">
        <img src={Divider1} className="img-fluid mt-4" alt="" />
      </div>

      {/* Our Parnters */}
      <OurPartners/>

      {/* Recent Contents */}
      <RecentContent/>

      {/* Our Creators */}
      <OurCreators/>

      {/* Our Blogspot */}
      <OurBlogspot/>

      <div className="bg-black p-5 d-flex justify-content-center">
        
        <img src={Divider} alt="" />
      </div>
      <Footer/>
    </div>
  );
}
