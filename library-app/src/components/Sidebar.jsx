import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ onClose}) {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Navigation</h2>
      <button onClick={onClose} style={{
        alignSelf: "flex-end",
        fontSize: "1.5rem",
        background: "none",
        border: "none",
        cursor: "pointer"
      }}>
        ✖
      </button>
      <ul className="sidebar-list">
        <li><Link to="/">🏠 Home</Link></li>
        <li><Link to="/books">📚 Books</Link></li>
        <li><Link to="/staff">👥 Staff</Link></li>
        <li><Link to="/quotes">💬 Quotes</Link></li>
        <li><Link to="/about">ℹ️ About</Link></li>
        <li><Link to="/contact">✉️ Contact</Link></li>
        <li><Link to="/location">📍 Location</Link></li>
        <li><Link to="/getcard">🎫 Get a Card</Link></li>
      </ul>
    </aside>
  );
}


