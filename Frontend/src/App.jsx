import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./componets/Header";
import Footer from "./componets/Footer";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import Test from "./pages/test/Test";
import TextSubject from "./pages/test/TextSubject";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aptitude-test" element={<Test />} />
        <Route path="/test-subject" element={<TextSubject />} />
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
