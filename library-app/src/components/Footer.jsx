// src/components/Footer.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section logo">
          <h2>Inkspire</h2>
          <p>Fuel your curiosity and imagination through the power of books.</p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Explore</a></li>
            <li><a href="#">Staff Picks</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section search">
          <h3>Search</h3>
          <div className="search-box">
            <input type="text" placeholder="Search books..." />
            <button>Go</button>
          </div>
        </div>

        <div className="footer-section contact">
          <h3>Connect with Us</h3>
          <p>Email: support@inkspire.com</p>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Inkspire. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
