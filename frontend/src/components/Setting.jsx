import React from "react";
import "../styles/Settings.css";

const Settings = () => {
  return (
    <div className="settings-section">
      <h2>Settings</h2>

      <div className="settings-option">
        <p>Enable Notifications</p>
        <button className="settings-btn">Toggle</button>
      </div>

      <div className="settings-option">
        <p>Dark Mode</p>
        <button className="settings-btn">Enabled</button>
      </div>

      <div className="settings-option danger">
        <p>Deactivate Account</p>
        <button className="danger-btn">Deactivate</button>
      </div>

      <div className="settings-option danger">
        <p>Delete Account</p>
        <button className="danger-btn">Delete</button>
      </div>
    </div>
  );
};

export default Settings;
