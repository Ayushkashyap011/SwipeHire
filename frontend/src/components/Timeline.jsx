import React from "react";
import "../styles/Timeline.css";

const steps = [
  {
    year: "2023",
    title: "Ideation Sparks",
    desc: "The SwipeHire concept was born—aiming to simplify internship hunting using AI and swiping tech.",
  },
  {
    year: "2024",
    title: "Product Built",
    desc: "The MVP was built and tested with real students and companies to validate its simplicity and power.",
  },
  {
    year: "2025",
    title: "Launch & Buzz",
    desc: "SwipeHire goes live, gaining traction across colleges and early-stage startups looking for interns.",
  },
  {
    year: "2026+",
    title: "Scaling Up",
    desc: "We’re expanding globally with new features, smarter AI, and wider opportunities for every student.",
  },
];

const Timeline = () => {
  return (
    <section className="timeline-section">
      <h2 className="timeline-heading">Our Journey</h2>
      <div className="timeline-container">
        {steps.map((step, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-year">{step.year}</div>
            <div className="timeline-content">
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
