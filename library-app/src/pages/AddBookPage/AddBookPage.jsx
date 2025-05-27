// src/pages/AddBookPage.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./AddBookPage.css";

function AddBookPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    isbn: "",
    published_date: "",
    available_copies: 1,
    author: { name: "" },
    category: { name: "" },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "author") {
      setFormData((prev) => ({
        ...prev,
        author: { name: value },
      }));
    } else if (name === "category") {
      setFormData((prev) => ({
        ...prev,
        category: { name: value },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/books/", formData);
      navigate("/books");
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  return (
    <div className="add-book-container">
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit} className="add-book-form">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="isbn"
          placeholder="ISBN"
          value={formData.isbn}
          onChange={handleChange}
        />
        <input
          type="date"
          name="published_date"
          value={formData.published_date}
          onChange={handleChange}
        />
        <input
          type="number"
          name="available_copies"
          placeholder="Available Copies"
          value={formData.available_copies}
          onChange={handleChange}
          min="1"
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category.name}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBookPage;
