import React from "react";
import "../styles/MatchCard.css";

const MatchCard = ({ companyName, position, location, matchPercent }) => {
  return (
    <div className="match-card">
      <div className="match-left">
        <h3>{companyName}</h3>
        <p>{position}</p>
        <p className="location">{location}</p>
      </div>
      <div className="match-right">
        <div className="match-percent">{matchPercent}% Match</div>
        <button className="match-btn">View Details</button>
      </div>
    </div>
  );
};

export default MatchCard;
