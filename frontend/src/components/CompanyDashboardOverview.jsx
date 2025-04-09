import React from "react";
import "../styles/CompanyOverview.css";

const CompanyDashboardOverview = () => {
  const stats = [
    { label: "Applications Received", value: 132 },
    { label: "Positions Posted", value: 5 },
    { label: "Interviews Scheduled", value: 21 },
    { label: "Perfect Matches", value: 9 },
  ];

  return (
    <div className="overview-wrapper">
      <h2>Dashboard Overview</h2>
      <div className="overview-grid">
        {stats.map((item, index) => (
          <div className="overview-card" key={index}>
            <div className="stat-value">{item.value}</div>
            <div className="stat-label">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyDashboardOverview;
