// src/components/layout/Layout.jsx
import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
