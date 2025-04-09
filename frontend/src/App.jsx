import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import StudentSignup from "./pages/StudentSignup";
import CompanySignup from "./pages/Companysignup";
import StudentDashboard from "./pages/StudentDashboard";
import CompanyDashboard from "./pages/CompanyDashboard";

// import './App.css'; // Optional: for global styles like font, bg, etc.

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/studentsignup" element={<StudentSignup />}/>
          <Route path="/companysignup" element={<CompanySignup />} />
          <Route path="/studentdashboard" element={<StudentDashboard/>} />
          <Route path="/companydashboard" element={<CompanyDashboard/>}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;

