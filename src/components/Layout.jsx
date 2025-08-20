import React from "react";
import NavBars from "./NavBars";
import { Outlet } from "react-router";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <NavBars />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
