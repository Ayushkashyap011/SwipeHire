import React from "react";
import "../styles/MissionVision.css";

const MissionVision = () => {
  return (
    <section className="mission-vision-section">
      <div className="mv-card mission">
        <h2>Our Mission</h2>
        <p>
          Empower every student to land their dream internship using cutting-edge AI matchmaking and an intuitive swipe-based experience.
        </p>
      </div>

      <div className="mv-card vision">
        <h2>Our Vision</h2>
        <p>
          To become the go-to platform for internship discovery, helping millions launch their careers without the hassle of traditional applications.
        </p>
      </div>
    </section>
  );
};

export default MissionVision;
