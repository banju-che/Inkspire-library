import React, { useState, useEffect } from "react";
import { fetchBooksFromGoogle } from "../../services/api";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./BooksPage.css";

function BooksPage() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 10;
  const navigate = useNavigate();

  const randomSubjects = [
    "fiction", "science", "history", "technology", "philosophy",
    "art", "psychology", "romance", "fantasy", "business",
  ];

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchInitialBooks = async () => {
      try {
        setLoading(true);
        setError(null);
        const randomSubject = randomSubjects[Math.floor(Math.random() * randomSubjects.length)];
        const booksData = await fetchBooksFromGoogle(randomSubject, signal);
        setBooks(booksData);
        setCurrentPage(1);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Error fetching books:", err);
          setError();
        }
      } finally {
        setLoading(false);
      }
    };

    fetchInitialBooks();
    return () => controller.abort();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    try {
      setLoading(true);
      setError(null);
      const controller = new AbortController();
      const signal = controller.signal;
      const booksData = await fetchBooksFromGoogle(searchTerm, signal);
      setBooks(booksData);
      setCurrentPage(1);
    } catch (err) {
      console.error("Search failed:", err);
      setError("Failed to search books.");
    } finally {
      setLoading(false);
    }
  };

  // Pagination calculations
  const totalPages = Math.ceil(books.length / booksPerPage);
  console.log("totalPages:", totalPages, "currentPage:", currentPage, "books length:", books.length);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const pageVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  // Generate an array of page numbers for buttons
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <motion.section
      className="books-page"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="books-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Books Collection
      </motion.h2>

      <motion.form
        onSubmit={handleSearch}
        className="search-form"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.input
          type="text"
          placeholder="Search books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
          whileFocus={{ scale: 1.03, boxShadow: "0 0 8px rgba(0,0,0,0.1)" }}
        />
        <motion.button
          type="submit"
          className="search-button"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Search
        </motion.button>
      </motion.form>

      {loading && <p>Loading books...</p>}
      {error && <p className="error">{error}</p>}

      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={currentPage}
          className="books-grid"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.4 }}
        >
          {currentBooks.map((book, index) => (
            <motion.div
              key={book.id || index}
              className="book-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => navigate(`/book/${book.id}`)}
              transition={{ duration: 0.4 }}
            >
              <div className="card-top">
                <img
                  src={book.image || "https://via.placeholder.com/100x150?text=No+Image"}
                  alt={book.title}
                  className="book-image"
                />
                <div className="book-meta">
                  <h3 className="book-title">{book.title}</h3>
                  <p className="book-category">{book.categories?.join(", ") || "Uncategorized"}</p>
                  <p className="book-author">{book.authors?.join(", ") || "Unknown Author"}</p>
                </div>
              </div>
              <div className="card-bottom">
                <p className="book-description">
                  {book.description ? book.description.slice(0, 200) + "..." : "No description available."}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="pagination-controls">
          <motion.button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="pagination-button"
            whileTap={{ scale: 0.9 }}
            aria-label="Previous page"
          >
            Prev
          </motion.button>

          {pageNumbers.map((num) => (
            <motion.button
              key={num}
              onClick={() => setCurrentPage(num)}
              className={`pagination-button ${num === currentPage ? "active" : ""}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-current={num === currentPage ? "page" : undefined}
            >
              {num}
            </motion.button>
          ))}

          <motion.button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="pagination-button"
            whileTap={{ scale: 0.9 }}
            aria-label="Next page"
          >
            Next
          </motion.button>
        </div>
      )}
    </motion.section>
  );
}

export default BooksPage;
