import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center bg-black"
      style={{ height: "100vh" }}
    >
      <h5 className="text-white mb-4">Not Found</h5>
      <Link to={'/'} style={{textDecoration:"none"}} className="our-creators-btn text-black">Back To Home Page</Link>
    </div>
  );
};

export default NotFound;
