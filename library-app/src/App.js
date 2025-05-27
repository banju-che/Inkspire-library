// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; // assuming layout/index.jsx or layout.jsx

// Landing page sections
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";


// Import all pages
import AboutPage from "./pages/AboutPage/AboutPage";
import AddBookPage from "./pages/AddBookPage/AddBookPage";
import BookDetail from "./pages/BookDetail/BookDetailsPage";
import BooksPage from "./pages/BooksPage/BooksPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import EditBook from "./pages/EditBook/EditBooksPage";
import GetCard from "./pages/GetCard/GetCard";
import Location from "./pages/Location/Location";
import LoginPage from "./pages/LoginPage/LoginPage";
import QuotesPage from "./pages/Quotes/QuotesPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import StaffPage from "./pages/StaffPage/StaffPage";



function App() {
  return (
    
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Hero />
                <Features />
                <HowItWorks />
                <Footer />
              </Layout>
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/add-book" element={<AddBookPage />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/edit-book/:id" element={<EditBook />} />
          <Route path="/get-card" element={<GetCard />} />
          <Route path="/location" element={<Location />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/quotes" element={<QuotesPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/staff" element={<StaffPage />} />
        </Routes>
      </Layout>
  );
}

export default App;
