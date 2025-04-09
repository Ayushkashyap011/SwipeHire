import React, { useState } from "react";
import "../styles/MatchCard.css";

const MatchCard = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleToggleMessage = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div className="match-card">
      <div className="match-header">
        <h3>Company Name</h3>
        <p>Role: Frontend Developer Intern</p>
        <p>Location: Remote</p>
      </div>
      
      <div className="match-actions">
        <button className="message-btn" onClick={handleToggleMessage}>Message</button>
        <button className="view-btn">View Details</button>
      </div>

      {showMessage && (
        <div className="company-message">
          <p><strong>Company:</strong> Hey! We loved your profile. When can you hop on a quick intro call?</p>
        </div>
      )}
    </div>
  );
};

export default MatchCard;
