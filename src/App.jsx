import React from "react";
import NavBars from "./components/NavBars";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/Vans/About";
import Footer from "./components/Footer";
import Vans from "./components/Vans";
import "./server";
import VanDetails from "./components/VanDetails";
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./pages/Host/HostLayout";
import HostVans from "./pages/Host/HostVans";
import HostVanDetails from "./pages/Host/HostVanDetails";

const App = () => {
  return (
    <div className="bg-[#FFF7ED] min-h-screen">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetails />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="van" element={<HostVans />} />
            <Route path="van/:id" element={<HostVanDetails />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
