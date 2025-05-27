// src/pages/AboutPage.jsx

import React from "react";
import "./AboutPage.css";

function AboutPage() {
  return (
    <section className="about-page">
      <div className="about-intro">
        <h1>About Inkspire Library</h1>
        <p>
          At Inkspire, our mission is to ignite a passion for reading and lifelong learning.
          We believe that books are more than just pages — they're gateways to knowledge,
          creativity, and connection.
        </p>
      </div>

      <div className="about-values">
        <h2>Our Core Values</h2>
        <ul>
          <li><strong>Accessibility:</strong> Making knowledge available to everyone.</li>
          <li><strong>Inspiration:</strong> Encouraging creativity through diverse literature.</li>
          <li><strong>Community:</strong> Creating a welcoming space for all readers.</li>
        </ul>
      </div>

      <div className="about-team">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="/images/staff1.jpg" alt="staff" />
            <h4>Jibish Carter</h4>
            <p>Senior Librarian</p>
          </div>
          <div className="team-member">
            <img src="/images/staff2.jpg" alt="staff" />
            <h4>Maya Thompson</h4>
            <p>Literature Curator</p>
          </div>
          <div className="team-member">
            <img src="/images/staff3.jpg" alt="staff" />
            <h4>Arjun Patel</h4>
            <p>History Specialist</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
