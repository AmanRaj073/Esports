import React, { useRef, useState } from "react";
import leftArrow from "../assets/leftarrow.svg";
import rightArrow from "../assets/righArrow.svg";
import coming1 from "../assets/comming.png";
import coming2 from "../assets/comming2.png";
import coming3 from "../assets/comming3.png";
import coming4 from "../assets/comming4.png";
import Divider from "../common/Divider";
import comingsoonlogo from "../assets/S8ul/S8ul/Coming soon.png";

const UpcomingProduct = () => {
  const scrollRef = useRef(null);

  const [likedItems, setLikedItems] = useState([]);
  const [clickedId, setClickedId] = useState(null);

  const toggleLike = (id) => {
    setClickedId(id); // trigger animation
    setTimeout(() => setClickedId(null), 200); // reset after animation

    setLikedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const handlePrevious = () => {
    scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const handleNext = () => {
    scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  const jerseys = [
    {
      id: 1,
      image: coming1,
      title: "Volleyball Jersey and/or Shorts | HXOGVB | Customize This!",
      color: "red-black",
    },
    {
      id: 2,
      image: coming2,
      title: "Volleyball Jersey and/or Shorts | HXOGVB | Customize This!",
      color: "black-green",
    },
    {
      id: 3,
      image: coming3,
      title: "Volleyball Jersey and/or Shorts | HXOGVB | Customize This!",
      color: "maroon",
    },
    {
      id: 4,
      image: coming4,
      title: "Volleyball Jersey and/or Shorts | HXOGVB | Customize This!",
      color: "blue",
    },
    {
      id: 1,
      image: coming1,
      title: "Volleyball Jersey and/or Shorts | HXOGVB | Customize This!",
      color: "red-black",
    },
    {
      id: 2,
      image: coming2,
      title: "Volleyball Jersey and/or Shorts | HXOGVB | Customize This!",
      color: "black-green",
    },
    {
      id: 3,
      image: coming3,
      title: "Volleyball Jersey and/or Shorts | HXOGVB | Customize This!",
      color: "maroon",
    },
    {
      id: 4,
      image: coming4,
      title: "Volleyball Jersey and/or Shorts | HXOGVB | Customize This!",
      color: "blue",
    },
  ];

  return (
    <div className="bg-black">
      {/* Category */}
      <div
        className="w-100"
        style={{ borderTop: "1px solid #333", borderBottom: "1px solid #333" }}
      >
        <div className="d-flex px-5 overflow-auto hide-scrollbar">
          {[
            "ALL PRODUCTS",
            "ACCESSORIES",
            "JERSEYS",
            "JACKETS",
            "HOODIES",
            "SHIRTS",
            "PANTS",
            "CREATORS",
          ].map((cat) => (
            <div key={cat} className="p-3 flex-fill text-nowrap text-white">
              {cat}
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-center mb-2">
          {/* Left: Headings */}
          <div className="d-flex gap-3">
            <h2 className="text-white" style={{ fontSize: "48px" }}>
              UPCOMING
            </h2>
            <h2 className="color-green" style={{ fontSize: "48px" }}>
              PRODUCTS
            </h2>
          </div>

          {/* Right: Arrow Buttons */}
          <div className="d-flex gap-3">
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
      </div>

      {/* Scrollable Cards */}
      <div className="container">
        <div
          ref={scrollRef}
          className="d-flex gap-3 pb-4 overflow-x-auto hide-scrollbar"
          style={{
            scrollBehavior: "smooth",
            paddingLeft: "15px", // Starting padding to prevent cut-off
            paddingRight: "15px",
            justifyContent:"start",
          }}
        >
          {jerseys.map((jersey) => (
            <div
              key={jersey.id}
              className="bg-black p-3 p-md-4 flex-shrink-0 position-relative"
              style={{
                border: "1px solid #333",
                width: "100%",
                maxWidth: "240px",
              }}
            >
              <div className="position-relative">
                <img
                  src={jersey.image}
                  alt={`Volleyball Jersey ${jersey.id}`}
                  className="img-fluid"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    maxHeight: "250px",
                  }}
                />
                <button
                  className="position-absolute top-0 end-0 m-2 text-white border-0 bg-transparent"
                  onClick={() => toggleLike(jersey.id)}
                >
                  <i
                    className={`${
                      likedItems.includes(jersey.id)
                        ? "fa-solid fa-heart text-danger"
                        : "fa-regular fa-heart"
                    } fa-lg heart-icon ${
                      clickedId === jersey.id ? "clicked" : ""
                    }`}
                  />
                </button>

                {/* Coming Soon Logo Centered */}
                <img
                  src={comingsoonlogo}
                  alt="Coming Soon"
                  className="position-absolute top-50 start-50 translate-middle"
                  style={{ width: "140px", opacity: 0.85 }}
                />
              </div>

              <div className="mt-3 mt-md-4">
                <div
                  style={{ backgroundColor: "#1E1E1E" }}
                  className="text-secondary fs-6 py-1 px-2 d-inline-block mb-2 w-auto"
                >
                  JERSEYS
                </div>

                <h6 className="text-white text-sm">{jersey.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Divider />
    </div>
  );
};

export default UpcomingProduct;
