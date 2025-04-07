import React, { useState } from "react";
import "../styles/ProfileUpdate.css";

const ProfileUpdate = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    college: "",
    degree: "",
    state: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleResumeUpload = (e) => {
    // handle file upload logic
    console.log("Resume selected:", e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // send data to backend
    console.log("Form Submitted:", formData);
    alert("Profile updated successfully!");
  };

  return (
    <div className="profile-update-container">
      <h2 className="profile-heading">Update Your Profile</h2>
      <form className="profile-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email (unchangeable)</label>
          <input type="email" value="student@example.com" disabled />
        </div>

        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>College / University</label>
          <input
            type="text"
            name="college"
            placeholder="College Name"
            value={formData.college}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Degree / Course</label>
          <input
            type="text"
            name="degree"
            placeholder="Your Degree"
            value={formData.degree}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>State</label>
          <input
            type="text"
            name="state"
            placeholder="State you live in"
            value={formData.state}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Upload Resume</label>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleResumeUpload}
          />
        </div>

        <div className="form-group">
          <label>Change Password</label>
          <input
            type="password"
            name="password"
            placeholder="New Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="save-btn">Save Changes</button>
      </form>
    </div>
  );
};

export default ProfileUpdate;
