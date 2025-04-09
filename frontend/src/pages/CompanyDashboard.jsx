import React, { useState } from "react";
import "./CompanyDashboard.css"; // We’ll create this next
import CompanyDashboardOverview from "../components/CompanyDashboardOverview";
import CompanyPostForm from "../components/CompanyPostForm";
import ChatBox from "../components/ChatBox";
import Settings from "../components/Setting";
import MatchCard from "../components/MatchCard";
import Footer from "../components/Footer";
import Recommendations from "../components/Recommendations";

const CompanyDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const studentRecommendations = [
    {
      name: "Karan Mehta",
      skills: ["React", "Node.js", "MongoDB"],
      location: "Delhi, India"
    },
    {
      name: "Anika Sharma",
      skills: ["Python", "NLP", "Machine Learning"],
      location: "Remote"
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <CompanyDashboardOverview />;
      case "post":
        return <CompanyPostForm/>;
      case "Recommendations":
        return <Recommendations type="company" data={studentRecommendations}/>
      case "matches":
        return <MatchCard/>;
      case "messages":
        return <ChatBox/>;
      case "settings":
        return <Settings/>;
      default:
        return null;
    }
  };

  return (
    <>
    <div className="company-dashboard-container">
      <aside className="company-sidebar">
        <h2 className="sidebar-logo">SwipeHire</h2>
        <ul className="sidebar-nav">
          <li onClick={() => setActiveTab("dashboard")}>Dashboard</li>
          <li onClick={() => setActiveTab("post")}>Post Internship</li>
          <li onClick={() => setActiveTab("Recommendations")}>Recommendations</li>
          <li onClick={() => setActiveTab("matches")}>Matches</li>
          <li onClick={() => setActiveTab("messages")}>Messages</li>
          <li onClick={() => setActiveTab("settings")}>Settings</li>
        </ul>
      </aside>

      <main className="company-main">
        <header className="company-topbar">
          <span>Company Dashboard</span>
          <img
            src="/assets/company-avatar.png"
            alt="Company Avatar"
            className="company-avatar"
            />
        </header>
        <section className="company-content">{renderContent()}</section>
      </main>
    </div>
    <Footer/>
            </>
  );
};

export default CompanyDashboard;
