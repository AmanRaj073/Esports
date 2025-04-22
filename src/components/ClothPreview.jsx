import React, { useState } from "react";
import tshirt1 from "../assets/tshirt3.png";
import tshirt2 from "../assets/tshirt1.png";
import tshirt3 from "../assets/tshirt2.png";
import tshirt4 from "../assets/tshirt4.png";

const ClothPreview = () => {
  const jerseys = [
    { id: 1, image: tshirt1, name: "Red Jersey" },
    { id: 2, image: tshirt2, name: "Blue Jersey" },
    { id: 3, image: tshirt3, name: "Green Jersey" },
    { id: 4, image: tshirt4, name: "Green1 Jersey" },
  ];
  const [selectedJersey, setSelectedJersey] = useState(jerseys[0]);

  return (
    <>
      <div className="bg-black cloth preview-box pt-5">
        <div className="container">
          <div className="row align-items-stretch g-0">
            {/* Left Section (Text and Button) */}
            <div className="col-12 col-md-6 p-0 d-flex">
              <div
                className="p-3 p-md-5"
                style={{
                  border: "1px solid #333",
                  height: "100%",
                  boxSizing: "border-box", // Ensure full height
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <p className="color-green">CUBBED UP JERSEYS</p>
                  <h2 className="text-white" style={{ fontSize: "32px", lineHeight: "1.2" }}>
                    JERSEYS THAT WRAP YOU IN PRIDE
                  </h2>
                  <h4 className="text-secondary" style={{ fontWeight: "400", color: "", lineHeight: "1.6" }}>
                    Whether you're out and about or lounging at home, our hoodies offer the perfect balance of warmth, softness, and style.
                  </h4>
                  <div>
                  <button className="our-creators-btn mt-4">BUY YOUR JERSEY NOW</button>

                  <div className="mt-5 d-flex gap-2 flex-wrap justify-content-start">
                    {jerseys.map((jersey) => (
                      <div
                        key={jersey.id}
                        onClick={() => setSelectedJersey(jersey)}
                        style={{
                          width: "80px",
                          height: "80px",
                          borderRadius: "50%",
                          overflow: "hidden",
                          cursor: "pointer",
                          border:
                            selectedJersey.id === jersey.id
                              ? "3px solid #ccff00"
                              : "3px solid #333", // Darker border when not selected
                          padding: "2px",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <img
                          src={jersey.image}
                          alt={jersey.name}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: "50%",
                            filter:
                              selectedJersey.id === jersey.id
                                ? "none"
                                : "brightness(0.7)", // Dim the color instead of grayscale
                            opacity: selectedJersey.id === jersey.id ? "1" : "0.8",
                            transition: "all 0.3s ease",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                </div>

                
              </div>
            </div>

            {/* Right Section (Image of Selected Jersey) */}
            <div className="col-12 col-md-6 p-0 d-flex justify-content-center">
              <div
                style={{
                  border: "1px solid #333",
                  width: "100%",
                  maxWidth: "650px",
                  height: "100%", // Ensure it matches the height of the left section
                  boxSizing: "border-box",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center", // Center the image
                }}
              >
                <img
                  src={selectedJersey.image}
                  alt="selected jersey"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    transition: "all 0.3s ease",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClothPreview;
