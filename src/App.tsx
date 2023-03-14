import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import AppNavbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
