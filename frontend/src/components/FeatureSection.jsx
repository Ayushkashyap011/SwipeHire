import React from "react";
import "../styles/FeatureSection.css";

const featuresData = [
  {
    title: "AI Matching System",
    description: "Our smart AI matches you with the perfect internship based on your skills, interests, and vibe.",
  },
  {
    title: "Real-Time Updates",
    description: "Get instant updates on application status, interviews, and next steps. No more ghosting!",
  },
  {
    title: "Verified Companies",
    description: "We only work with real, verified, trustworthy companies — no scams, no cap.",
  },
  {
    title: "One-Click Apply",
    description: "Apply to multiple roles in seconds. Swipe, match, and go. It's that easy.",
  },
];

const Features = () => {
  return (
    <section className="features-section">
      <h2 className="features-heading">Our Features</h2>
      <div className="features-grid">
        {featuresData.map((feature, index) => (
          <div key={index} className="feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
