// src/pages/SignupPage.jsx
import React from "react";
import "./LoginSignup.css";

function SignupPage() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Sign Up</h2>
        <form>
          <label>Full Name</label>
          <input type="text" placeholder="Your name" />

          <label>Email</label>
          <input type="email" placeholder="Enter email" />

          <label>Password</label>
          <input type="password" placeholder="Create password" />

          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <a href="/login">Log in</a></p>
      </div>
    </div>
  );
}

export default SignupPage;
