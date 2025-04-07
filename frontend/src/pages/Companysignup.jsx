import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Companysignup.css";
import companyImg from "../assets/signupcompany.webp"; // replace with your actual image

const CompanySignup = () => {
  return (
    <>
      <Navbar />
      <div className="company-signup-container">
        <div className="company-signup-left">
          <h2 className="company-signup-title">Company Signup</h2>
          <form className="company-signup-form">
            <label>Company Name</label>
            <input type="text" placeholder="Enter your company name" required />

            <label>Website</label>
            <input type="url" placeholder="https://yourcompany.com" required />

            <label>Industry</label>
            <input type="text" placeholder="e.g., Tech, Marketing, Finance" required />

            <label>HR Name</label>
            <input type="text" placeholder="Enter HR's full name" required />

            <label>HR Phone Number</label>
            <input type="tel" placeholder="Enter phone number" required />

            <div className="terms-text">
              <p>
                By submitting our webform, you agree to receive promotional calls on the number shared, and such calls and SMS would be coming from a third-party platform...
              </p>
            </div>

            <button type="submit" className="company-signup-btn">Create Account</button>
          </form>
        </div>

        <div className="company-signup-right">
          <img src={companyImg} alt="Signup Visual" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CompanySignup;
