// src/pages/LoginPage.jsx
import React from "react";
import "./LoginSignup.css";

function LoginPage() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>
        <form>
          <label>Email</label>
          <input type="email" placeholder="Enter email" />

          <label>Password</label>
          <input type="password" placeholder="Enter password" />

          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="/signup">Sign up</a></p>
      </div>
    </div>
  );
}

export default LoginPage;
