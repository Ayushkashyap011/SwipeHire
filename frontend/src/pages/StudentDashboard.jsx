import React, { useState } from "react";
import "./StudentDashboard.css";
import ProfileUpdate from "../components/ProfileUpdate";
import Settings from "../components/Setting";
import MatchCard from "../components/MatchCard";
import ChatBox from "../components/ChatBox";
import Recommendations from "../components/Recommendations"; // ✅ NEW

const StudentDashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // ✅ Mock recommendation data for now
  const internshipRecommendations = [
    {
      title: "Frontend Intern",
      company: "TechWave",
      skills: ["React", "CSS", "JS"],
      location: "Remote"
    },
    {
      title: "AI Research Intern",
      company: "BrainTech",
      skills: ["Python", "TensorFlow"],
      location: "Bangalore"
    }
  ];

  const renderSection = () => {
    switch (activeSection) {
      case "dashboard":
        return <h1>Welcome back, Mia!</h1>;
      case "Recommendations":
        return <Recommendations  type="student" data={internshipRecommendations}/>;
      case "matches":
        return (
          <div className="matches-section">

            <h2>Your Matches</h2>
            <MatchCard 
              company="TechNova Inc."
              role="Frontend Developer Intern"
              location="Bangalore, India"
              industry="Software & IT"
            />
            <MatchCard 
              company="GreenByte"
              role="ML Research Intern"
              location="Remote"
              industry="AI & Sustainability"
            />
            <MatchCard 
              company="CodeCrush"
              role="Backend Developer Intern"
              location="Mumbai, India"
              industry="Web Development"
            />
          </div>
        );
      case "profile":
        return <ProfileUpdate />;
      case "settings":
        return <Settings />;
      case "messages":
        return <ChatBox />;
      default:
        return <h1>Welcome back, Mia!</h1>;
    }
  };

  return (
    <div className="student-dashboard">
      <div className="hamburger" onClick={() => setSidebarOpen(!sidebarOpen)}>
        ☰
      </div>

      <aside className={`dashboard-sidebar ${sidebarOpen ? "open" : ""}`}>
        <h2 className="sidebar-logo">SwipeHire</h2>
        <ul className="sidebar-nav">
          <li onClick={() => setActiveSection("dashboard")}>Dashboard</li>
          <li onClick={() => setActiveSection("Recommendations")}>Recommendations</li>
          <li onClick={() => setActiveSection("matches")}>Matches</li>
          <li onClick={() => setActiveSection("messages")}>Messages</li>
          <li onClick={() => setActiveSection("profile")}>Update Profile</li>
          <li onClick={() => setActiveSection("settings")}>Settings</li>
        </ul>
      </aside>

      <div className="dashboard-main">
        <main className="dashboard-content">
          {renderSection()}
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;
