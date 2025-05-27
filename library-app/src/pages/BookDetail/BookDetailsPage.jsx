// src/pages/BookDetailsPage.jsx

import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./BookDetailsPage.css";
import api from "../../services/api"

function BookDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

 const [book, setBooks] = useState()
 
 const handleDelete = async () => {
  if (window.confirm("Are you sure you want to delete this book?")) {
    try {
      await api.delete(`/books/${id}/`);
      navigate("/books");
    } catch (error) {
      console.error("Failed to delete book:", error);
    }
  }
};

 useEffect(() => {
  api.get(`/books/${id}/`)
    .then((res) => setBooks(res.data))
    .catch(err => console.log("Error loading book details", err))
 },[id])


 if(!book) return <p>Loadind...</p>

  return (
    <div className="book-details-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="book-details-card">
        <img src={book.cover} alt={book.title} className="book-cover" />

        <div className="book-info">
          <h2>{book.title}</h2>
            <p><strong>Author:</strong> {book.author?.name}</p>
            <p><strong>Category:</strong> {book.category?.name || "N/A"}</p>
            <p><strong>ISBN:</strong> {book.isbn}</p>
            <p><strong>Published:</strong> {book.published_date || "Unknown"}</p>
            <p><strong>Available Copies:</strong> {book.available_copies}</p>
            <p><strong>Description:</strong></p>
            <p>{book.description || "No description provided."}</p>
        </div>
      </div>
      <div>
          <button
            onClick={() => navigate(`/books/${book.id}/edit`)}
            className="edit-button"
          >
            ✏️ Edit Book
          </button>
          <button className="delete-button" onClick={handleDelete}>
            🗑️ Delete Book
          </button>
      </div>
    </div>
  );
}

export default BookDetailsPage;
