import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./EditBooksPage.css"; // Reuse styles

function EditBookPage() {
  const { id } = useParams();
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

  useEffect(() => {
    api.get(`/books/${id}/`)
      .then((res) => {
        setFormData({
          ...res.data,
          author: { name: res.data.author?.name || "" },
          category: { name: res.data.category?.name || "" },
        });
      })
      .catch((err) => console.error("Failed to fetch book:", err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "author") {
      setFormData((prev) => ({ ...prev, author: { name: value } }));
    } else if (name === "category") {
      setFormData((prev) => ({ ...prev, category: { name: value } }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/books/${id}/`, formData);
      navigate(`/books/${id}`);
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  return (
    <div className="add-book-container">
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit} className="add-book-form">
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        <textarea name="description" value={formData.description} onChange={handleChange} />
        <input type="text" name="isbn" value={formData.isbn} onChange={handleChange} />
        <input type="date" name="published_date" value={formData.published_date} onChange={handleChange} />
        <input type="number" name="available_copies" value={formData.available_copies} onChange={handleChange} min="1" />
        <input type="text" name="author" placeholder="Author" value={formData.author.name} onChange={handleChange} required />
        <input type="text" name="category" placeholder="Category" value={formData.category.name} onChange={handleChange} required />
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
}

export default EditBookPage;
