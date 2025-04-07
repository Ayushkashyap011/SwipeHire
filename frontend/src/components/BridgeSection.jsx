import React from "react";
import "../styles/BridgeSection.css";
import logo from "../assets/logo.png"; // Replace with your logo path

const BridgeSection = () => {
  return (
    <section className="bridge-section">
      <div className="bridge-left">
        <img src={logo} alt="SwipeHire Logo" className="bridge-logo" />
        
      </div>

      <div className="bridge-right">
        <h2 className="bridge-title">Bridging The Skill Gap</h2>
        <p className="bridge-description">
          At SwipeHire, we connect passionate students with perfect-fit internships using AI.
          No more scrolling endlessly. No more missed chances. Just real skill, real roles, real fast.
          It's time to close the gap and level up.
        </p>
      </div>
    </section>
  );
};

export default BridgeSection;
