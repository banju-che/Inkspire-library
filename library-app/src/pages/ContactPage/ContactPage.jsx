// src/pages/ContactPage.jsx

import React from "react";
import "./ContactPage.css";

function ContactPage() {
  return (
    <section className="contact-page">
      <h1>Contact Us</h1>
      <p className="intro">
        We'd love to hear from you! Whether you have a question, feedback, or just want to say hello — reach out.
      </p>

      <div className="contact-container">
        <form className="contact-form">
          <label>
            Name:
            <input type="text" placeholder="Your full name" required />
          </label>

          <label>
            Email:
            <input type="email" placeholder="Your email address" required />
          </label>

          <label>
            Message:
            <textarea placeholder="Write your message..." rows="5" required></textarea>
          </label>

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h2>Reach Us</h2>
          <p>Email: support@inkspirelibrary.com</p>
          <p>Phone: +254 712 345 678</p>
          <p>Address: 123 Inkspire Avenue, Nairobi, Kenya</p>

          <div className="socials">
            <a href="#"><img src="/icons/facebook.svg" alt="Facebook" /></a>
            <a href="#"><img src="/icons/twitter.svg" alt="Twitter" /></a>
            <a href="#"><img src="/icons/instagram.svg" alt="Instagram" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
