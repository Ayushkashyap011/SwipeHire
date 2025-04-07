import React from "react";
import "../styles/HeroAbout.css";
import aboutHero from "../assets/abouthero.webp"; // You can replace this with your actual image

const HeroAbout = () => {
  return (
    <section className="about-hero">
      <div className="about-hero-text">
        <h1>About SwipeHire</h1>
        <p>
          Revolutionizing internship recruitment by blending AI with swipe-based tech. Our mission?
          Make hiring fast, fun, and futuristic.
        </p>
      </div>
      <div className="about-hero-image">
        <img src={aboutHero} alt="About SwipeHire" />
      </div>
    </section>
  );
};

export default HeroAbout;
