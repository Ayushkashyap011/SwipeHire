import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css"; // We'll create this for styling
import HeroAbout from "../components/HeroAbout";
import MissionVision from "../components/MissionVision";
import Timeline from "../components/Timeline";
import Founder from "../components/Founder";


const About = () => {
  return (
    <>
      <Navbar />
      <HeroAbout />
      <MissionVision />
      <Timeline />
      <Founder />
      <Footer />
    </>
  );
};

export default About;
