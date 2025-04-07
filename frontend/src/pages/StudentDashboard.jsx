import React, { useState } from "react";
import "./StudentDashboard.css";
import ProfileUpdate from "../components/ProfileUpdate";

import Settings from "../components/Setting"; // <- you’ll create this next
import MatchCard from "../components/MatchCard";

const StudentDashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const renderSection = () => {
    switch (activeSection) {
      case "matches":
        return <MatchCard />
      case "profile":
        return <ProfileUpdate />;
      case "settings":
        return <Settings />;
      default:
        return <h1>Welcome back, Mia!</h1>;
    }
  };

  return (
    <div className="student-dashboard">
      <aside className="dashboard-sidebar">
        <h2 className="sidebar-logo">SwipeHire</h2>
        <ul className="sidebar-nav">
          <li onClick={() => setActiveSection("dashboard")}>Dashboard</li>
          <li onClick={() => setActiveSection("matches")}>Matches</li>
          <li onClick={() => setActiveSection("profile")}>Update Profile</li>
          <li onClick={() => setActiveSection("settings")}>Settings</li>
        </ul>
      </aside>

      <div className="dashboard-main">
        <main className="dashboard-content">
          {renderSection()}
        </main>
      </div>

      <aside className="dashboard-chat">
        <h3>Messaging</h3>
      </aside>
    </div>
  );
};

export default StudentDashboard;
