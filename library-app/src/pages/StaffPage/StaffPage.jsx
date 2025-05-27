// src/pages/StaffPage.jsx

import React from "react";
import "./StaffPage.css";

const staffList = [
  {
    name: "Jibish Carter",
    role: "Chief Librarian",
    image: "/images/staff1.jpg",
    bio: "Passionate about connecting people to stories that inspire growth.",
  },
  {
    name: "Maya Thompson",
    role: "Literature Curator",
    image: "/images/staff2.jpg",
    bio: "Specializes in curating fiction from around the globe.",
  },
  {
    name: "Arjun Patel",
    role: "History Specialist",
    image: "/images/staff3.jpg",
    bio: "Believes every book holds a lesson from the past.",
  },
  {
    name: "Lina Gomez",
    role: "Children's Book Expert",
    image: "/images/staff4.jpg",
    bio: "Committed to nurturing young minds through magical stories.",
  },
];

function StaffPage() {
  return (
    <section className="staff-page-container">
      <h2 className="staff-page-title">Meet Our Staff</h2>
      <div className="staff-grid">
        {staffList.map((staff, idx) => (
          <div className="staff-card" key={idx}>
            <img src={staff.image} alt={staff.name} className="staff-photo" />
            <h3 className="staff-name">{staff.name}</h3>
            <p className="staff-role">{staff.role}</p>
            <p className="staff-bio">{staff.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StaffPage;
