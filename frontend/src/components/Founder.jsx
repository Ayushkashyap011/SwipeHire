import React from "react";
import founder1 from "../assets/founder.jpg";
import founder2 from "../assets/founder.jpg";
import founder3 from "../assets/founder.jpg";
import "../styles/Founder.css";

const founders = [
  {
    name: "Ayush Kashyap",
    image: founder1,
    role: "Visionary & Creative Lead",
    quote: "Bringing wild ideas to life and turning chaos into creation.",
  },
  {
    name: "Smarty Sam",
    image: founder2,
    role: "Tech Architect",
    quote: "SwipeHire is code + culture. I build what others dream of.",
  },
  {
    name: "CHuka Samal",
    image: founder3,
    role: "Growth Strategist",
    quote: "Helping SwipeHire scale with community, not just clicks.",
  },
];

const Founders = () => {
  return (
    <section className="founder-section">
      <h2 className="founder-title">Meet Our Founders</h2>
      <div className="founders-grid">
        {founders.map((founder, index) => (
          <div key={index} className="founder-card">
            <img src={founder.image} alt={founder.name} className="founder-img" />
            <h3>{founder.name}</h3>
            <p className="founder-role">{founder.role}</p>
            <p className="founder-quote">"{founder.quote}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Founders;
