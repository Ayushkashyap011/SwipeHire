import React from 'react';
import Navbar from '../components/Navbar';
import './Home.css';
import Hero from '../components/HeroSection';
import PartnerSection from '../components/PartnerSection';
import BridgeSection from '../components/BridgeSection';
import Features from '../components/FeatureSection';
import CompanyPresent from '../components/CompanyPresent';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Hero />
      <PartnerSection />
      <Features />
      <BridgeSection />
      <CompanyPresent />
      <Footer />
    </div>
  );
};

export default Home;
