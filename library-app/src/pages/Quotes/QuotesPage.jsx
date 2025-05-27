// src/pages/QuotesPage.jsx

import React, { useState } from "react";
import "./QuotesPage.css";

const categories = [
  "All", "Inspiration", "Love", "Wisdom", "Motivation", "Friendship", "Life"
];

const quotes = [
  {
    text: "A reader lives a thousand lives before he dies.",
    author: "George R.R. Martin",
    category: "Inspiration",
  },
  {
    text: "Love all, trust a few, do wrong to none.",
    author: "William Shakespeare",
    category: "Love",
  },
  {
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
    category: "Motivation",
  },
  {
    text: "Knowing yourself is the beginning of all wisdom.",
    author: "Aristotle",
    category: "Wisdom",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
    category: "Life",
  },
];

function QuotesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredQuotes = selectedCategory === "All"
    ? quotes
    : quotes.filter(quote => quote.category === selectedCategory);

  return (
    <section className="quotes-page">
      <h2 className="quotes-title">Explore Quotes by Category</h2>

      <div className="category-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="quotes-list">
        {filteredQuotes.map((quote, index) => (
          <div className="quote-card" key={index}>
            <p className="quote-text">“{quote.text}”</p>
            <p className="quote-author">— {quote.author}</p>
            <span className="quote-tag">{quote.category}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default QuotesPage;
