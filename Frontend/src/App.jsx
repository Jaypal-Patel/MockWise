import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./componets/Header";
import Footer from "./componets/Footer";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import AptitudeTest from "./pages/test/AptitudeTest";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aptitude-test" element={<AptitudeTest />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
