import React from 'react';
import heroImg from '../assets/HeroImage-1.webp';
import studentImg from '../assets/student.jpg';
import companyImg from '../assets/company.png';
import '../styles/HeroSection.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <h1>
            The journey to land your <br />
            <span className="highlight">Dream Internship</span> is just <span className="highlight">ONE Swipe</span> away.
          </h1>
          <p>
            SwipeHire connects students to top internships using AI magic and swipe-based tech. No boring forms.
          </p>

          <ul>
            <li> AI-Matched Internships</li>
            <li> Swipe to Apply</li>
            <li> Chat with HR Instantly</li>
            <li> Smart Resume Insights</li>
          </ul>
        </div>

        <div className="hero-right">
          <img src={heroImg} alt="Internship Hero" />
        </div>
      </div>
     

      <div className="role-select">
        <h2 className="question">New here?</h2>
        <p>Register now and find your perfect match with a swipe.</p>
        <div className="role-buttons">
          <div className="role-block">
            <Link to="/studentsignup" className="nav-link"><button className="btn student">I am a Student</button></Link>  
            <img src={studentImg} alt="Student" className="role-img" />
          </div>
          <div className="role-block">
          <Link to="/companysignup" className="nav-link"><button className="btn company">I am a Company</button></Link> 
            <img src={companyImg} alt="Company" className="role-img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
