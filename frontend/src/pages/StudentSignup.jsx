import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Studentsignup.css";
import signupImage from "../assets/signup.webp"; // your right side image

const StudentSignup = () => {
  return (
    <>
      <Navbar />
      <div className="student-signup-page">
        <div className="form-section">
          <h1 className="form-heading">Student Signup</h1>
          <form className="signup-form">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your name" required />
            </div>


            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="Enter your phone number" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Enter a strong password" required />
            </div>

            <div className="form-group">
              <label>College / University</label>
              <input type="text" placeholder="Enter your institution" required />
            </div>

            <div className="form-group">
              <label>Course / Degree</label>
              <input type="text" placeholder="Enter your course or degree" required />
            </div>

            <div className="form-group">
              <label>State You Live In</label>
              <input type="text" placeholder="Enter your state" required />
            </div>

            <div className="form-group resume-upload">
  <label>Upload Resume</label>
  <div className="custom-file-upload">
    <input type="file" id="resume" accept=".pdf,.doc,.docx" />
    <label htmlFor="resume" className="upload-btn">Choose File</label>
    <span id="file-name">No file chosen</span>
  </div>
</div>

            <div className="form-group">
              <label>Select Role</label>
              <select required>
                <option value="">Choose Role</option>
                <option value="student">Student</option>
                <option value="company">Company</option>
              </select>
            </div>

            <button type="submit" className="signup-btn">Create Account</button>
          </form>
        </div>

        <div className="image-section">
          <img src={signupImage} alt="Student Visual" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StudentSignup;
