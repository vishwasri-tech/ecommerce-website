import React from "react";
import { Link } from "react-router-dom"; 
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Log In</h2>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="" />

          <div className="login-reset-password-container">
            <input type="checkbox" id="reset-checkbox" />
            <label htmlFor="reset-checkbox" className="login-reset-password">
              Reset&nbsp;&nbsp;Password
            </label>
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link> {/* Navigate to Signup */}
        </p>
      </div>
    </div>
  );
};

export default Login;
