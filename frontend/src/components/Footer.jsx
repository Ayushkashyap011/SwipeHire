import React from "react";
import "../styles/Footer.css";
import { FaFacebookF, FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social-box">
        <h3>Follow us on social networks</h3>
        <p>Let's catch up on our social media channels to share frequent updates and make better connections :)</p>
        <div className="social-icons">
          <FaFacebookF className="icon facebook" />
          <FaWhatsapp className="icon whatsapp" />
          <FaInstagram className="icon instagram" />
          <FaLinkedin className="icon linkedin" />
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-section brand">
          <h2 className="brand-logo">Swipe<span>Hire</span></h2>
          <p>SwipeHire is a cutting-edge AI platform helping students and companies connect through smarter internship hiring.</p>
          {/* <div className="subscribe">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div> */}
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>connect@swipehire.com</p>
        </div>

        <div className="footer-section links">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Wall of Love</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
