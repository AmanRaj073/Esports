import React from "react";

const TeamsCards = ({ teams }) => {
  return (
    <div className="teams-container">
      <div className="d-flex flex-wrap justify-content-center teams-wrapper gap-3">
        {teams.map((item, index) => {
          return (
            <div key={index} className="team-card">  {/* Added key and className */}
              <img src={item.image} alt={`Team member ${item.title}`} className="img-fluid" /> {/* Better alt text */}
              <p style={{backgroundColor:"#212121",fontWeight:"600",fontSize:"24px"}} className="team-title text-center w-100 p-2 text-white fs-3">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamsCards;
