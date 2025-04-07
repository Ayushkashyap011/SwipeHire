import React from "react";
import "../styles/CompanyPresent.css";
import companyLogos from "../assets/companyall-logo.webp"; // single image file

const CompanyPresent = () => {
  return (
    <section className="company-section">
      <h2 className="company-heading">
        Trusted by the Best: Our Partners & Placements
      </h2>
      <div className="company-logos-wrapper">
        <img src={companyLogos} alt="Company Logos" className="company-logos-image" />
      </div>
    </section>
  );
};

export default CompanyPresent;
