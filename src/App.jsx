import React from "react";
import NavBars from "./components/NavBars";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Vans from "./components/Vans";
import "./server";

const App = () => {
  return (
    <div className="bg-[#FFF7ED] min-h-screen">
      <NavBars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
