import React from "react";
import ImageCarsousel from "../components/ImageCarsousel";
import Navbar from "../common/Navbar";
import ClothPreview from "../components/ClothPreview";
import UpcomingProduct from "../components/UpcomingProduct";
import Footer from "../common/Footer";

const Shop = () => {
  return (
    <div className="landing-page">
      <div className="">
        {/* Transparent Navbar */}
        <Navbar />

        <ImageCarsousel />

        <ClothPreview />

        <UpcomingProduct />
        <Footer />
      </div>
    </div>
  );
};

export default Shop;
