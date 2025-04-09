import React, { useState } from "react";
import "../styles/CompanyPostForm.css";

const CompanyPostForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    stipend: "",
    skills: [],
    newSkill: "",
    mode: "remote",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSkillAdd = (e) => {
    e.preventDefault();
    const skill = formData.newSkill.trim();
    if (skill !== "" && !formData.skills.includes(skill)) {
      setFormData({
        ...formData,
        skills: [...formData.skills, skill],
        newSkill: "",
      });
    }
  };

  const handleSkillRemove = (skillToRemove) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((skill) => skill !== skillToRemove),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Internship Data:", formData);
    alert("Internship posted successfully!");
    // TODO: Connect with backend API
  };

  return (
    <div className="postform-wrapper">
      <h2>Post a New Internship</h2>
      <form onSubmit={handleSubmit} className="postform-form">
        <input type="text" name="title" placeholder="Internship Title" value={formData.title} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} rows="5" required />
        <input type="text" name="location" placeholder="Location (City or Remote)" value={formData.location} onChange={handleChange} required />
        <input type="text" name="stipend" placeholder="Stipend (optional)" value={formData.stipend} onChange={handleChange} />

        {/* Skill input section */}
        <div className="skills-input">
          <input
            type="text"
            placeholder="Add a skill..."
            value={formData.newSkill}
            onChange={(e) => setFormData({ ...formData, newSkill: e.target.value })}
            onKeyDown={(e) => e.key === "Enter" && handleSkillAdd(e)}
          />
          <button onClick={handleSkillAdd}>+</button>
        </div>

        <div className="skill-tags">
          {formData.skills.map((skill, idx) => (
            <span key={idx} className="skill-tag">
              {skill}
              <button type="button" onClick={() => handleSkillRemove(skill)}>✕</button>
            </span>
          ))}
        </div>

        <div className="radio-group">
          <label>
            <input type="radio" name="mode" value="remote" checked={formData.mode === "remote"} onChange={handleChange} />
            Remote
          </label>
          <label>
            <input type="radio" name="mode" value="onsite" checked={formData.mode === "onsite"} onChange={handleChange} />
            On-site
          </label>
          <label>
            <input type="radio" name="mode" value="hybrid" checked={formData.mode === "hybrid"} onChange={handleChange} />
            Hybrid
          </label>
        </div>

        <button type="submit">Post Internship</button>
      </form>
    </div>
  );
};

export default CompanyPostForm;
