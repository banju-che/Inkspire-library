import React from "react";
import "./GetCard.css";

function GetCard() {
  return (
    <section className="get-card-section">
      <div className="card-container">
        <h2>Apply for a Library Card</h2>
        <p>Fill in the form to receive your personalized Inkspire Library Card.</p>
        <form className="card-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="City / Branch" required />
          <button type="submit">Submit Application</button>
        </form>

        <div className="help-section">
          <h3>Need Help?</h3>
          <p>Reach out to our support team via <a href="/contact">Contact Page</a> or visit your local branch.</p>
        </div>
      </div>
    </section>
  );
}

export default GetCard;
