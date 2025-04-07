import React from "react";
import "../styles/PartnerSection.css";

// Explicit imports for better path resolution
import logo2 from "../assets/logos/2.webp";
import logo3 from "../assets/logos/3.webp";
import logo17 from "../assets/logos/17.webp";
import logo18 from "../assets/logos/18.webp";
import logo19 from "../assets/logos/19.webp";
import logo20 from "../assets/logos/20.webp";
import logo21 from "../assets/logos/21.webp";
import logo22 from "../assets/logos/22.webp";
import logo23 from "../assets/logos/23.webp";
import logo26 from "../assets/logos/26.webp";
import logo28 from "../assets/logos/28.webp";
import logo31 from "../assets/logos/31.webp";
import logo32 from "../assets/logos/32.webp";
import logo8 from "../assets/logos/8.webp";
import logo11 from "../assets/logos/11.webp";

const logos = [
  logo2,
  logo3,
  logo17,
  logo18,
  logo19,
  logo20,
  logo21,
  logo22,
  logo23,
  logo26,
  logo28,
  logo31,
  logo32,
  logo8,
  logo11,
];

const PartnerSection = () => {
  return (
    <section className="partners">
      <h2>Our Partner Institutes</h2>
      <div className="logo-scroll-wrapper">
        <div className="logo-scroll">
          {[...logos, ...logos].map((logo, index) => (
            <div className="logo-container" key={index}>
              <img src={logo} alt={`Partner ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
