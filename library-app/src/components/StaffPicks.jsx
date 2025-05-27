// src/components/StaffPicks.jsx

import React from "react";
import StaffCard from "./StaffCard";

function StaffPicks() {
  const staffPicks = [
    {
      name: "Jibish Carter",
      role: "Senior Librarian",
      photo: "/images/staff1.jpg",
      pick: "The Alchemist by Paulo Coelho",
      comment: "A magical story about following your dreams.",
    },
    {
      name: "Maya Thompson",
      role: "Literature Curator",
      photo: "/images/staff2.jpg",
      pick: "To Kill a Mockingbird by Harper Lee",
      comment: "A powerful book about justice and compassion.",
    },
    {
      name: "Arjun Patel",
      role: "History Specialist",
      photo: "/images/staff3.jpg",
      pick: "Sapiens: A Brief History of Humankind by Yuval Noah Harari",
      comment: "An incredible journey through human history.",
    }
  ];

  return (
    <section className="staff-picks-section py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Staff Picks</h2>

      <div className="grid">
        {staffPicks.map((staff, index) => (
          <StaffCard
            key={index}
            image={staff.photo}
            name={staff.name}
            role={staff.role}
            book={staff.pick}
            comment={staff.comment}
          />
        ))}
      </div>
    </section>
  );
}

export default StaffPicks;
