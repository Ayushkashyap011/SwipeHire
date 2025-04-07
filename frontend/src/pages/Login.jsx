import React, { useState } from "react";
import Footer from "../components/Footer";
import "./Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="login-wrapper">
        <div className="login-glass">
          <h1>Login to SwipeHire</h1>
          <p className="tagline">Match. Swipe. Get Hired.</p>

          <form>
            <input type="email" placeholder="Email" required />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
            />

            <div className="show-password">
              <input
                type="checkbox"
                onChange={() => setShowPassword(!showPassword)}
              />
              <span>Show Password</span>
            </div>

            <button type="submit">Login</button>
          </form>

          <div className="alt-links">
            <a href="#">Forgot Password?</a>
            <a href="/signup-student">Sign up as Student</a>
            <a href="/signup-company">Sign up as Company</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
