import React from "react";
import "./Location.css";

function Location() {
  return (
    <section className="location-section">
      <div className="location-container">
        <h2>Find Our Libraries</h2>
        <p>We have branches in major cities. Use the map or contact a branch directly.</p>
        <iframe
          title="Library Location"
          src="https://www.google.com/maps/embed?pb=..."
          className="map-frame"
        ></iframe>
      </div>
    </section>
  );
}

export default Location;
