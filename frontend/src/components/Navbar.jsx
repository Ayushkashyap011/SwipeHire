import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import Logo from "../assets/Logo.png";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="SwipeHire Logo" />
      </div>

      {/* Hamburger Toggle */}
      <div className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </div>

      {/* Nav Links */}
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/about" className="nav-link">About</Link></li>
        <li><Link to="/contact" className="nav-link">Contact</Link></li>
        <li><Link to="/login" className="nav-link">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
