import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  const handleAnchorClick = (e, id) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="navbar">
        <button onClick={toggleSidebar} className="menu-btn">☰</button>

        <div className="logo-container">
          <img src="/images/inkspire Logo.png" alt="logo" className="logo" />
        </div>

        <ul className="nav-links">
          <li><a href="#home" onClick={(e) => handleAnchorClick(e, "home")}>Home</a></li>
          <li><a href="#features" onClick={(e) => handleAnchorClick(e, "features")}>Features</a></li>
          <li><a href="#explore" onClick={(e) => handleAnchorClick(e, "explore")}>Explore</a></li>
          <li><a href="#how-it-works" onClick={(e) => handleAnchorClick(e, "how-it-works")}>How It Works</a></li>
          <li><a href="#staff-picks" onClick={(e) => handleAnchorClick(e, "staff-picks")}>Staff Picks</a></li>
          <li><a href="#footer" onClick={(e) => handleAnchorClick(e, "footer")}>Footer</a></li>
        </ul>

        <div className="btn-group">
          <Link to="/login"><button className="btn">Login</button></Link>
          <Link to="/signup"><button className="btn">Sign Up</button></Link>
        </div>
      </nav>

      {/* Sidebar Animation */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            className="sidebar"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
          >
            <button className="close-btn" onClick={closeSidebar}>×</button>
            <ul className="sidebar-links">
              <li><Link to="/" onClick={closeSidebar}>🏠 Home</Link></li>
              <li><Link to="/books" onClick={closeSidebar}>📚 Books</Link></li>
              <li><Link to="/staff" onClick={closeSidebar}>👥 Staff</Link></li>
              <li><Link to="/quotes" onClick={closeSidebar}>💬 Quotes</Link></li>
              <li><Link to="/about" onClick={closeSidebar}>ℹ️ About</Link></li>
              <li><Link to="/contact" onClick={closeSidebar}>✉️ Contact</Link></li>
              <li><Link to="/location" onClick={closeSidebar}>📍 Location</Link></li>
              <li><Link to="/getcard" onClick={closeSidebar}>🎫 Get a Card</Link></li>
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
