import React from "react";
import { NavLink } from "react-router-dom";

const NavBars = () => {
  return (
    <div className="flex justify-between items-center p-6">
      <div>
        <NavLink to="/">
          <button className="font-black cursor-pointer text-2xl">
            #VANLIFE
          </button>
        </NavLink>
      </div>
      <div>
        <ul className="flex gap-2 mr-3 ">
          <li className="hover:underline hover:font-bold">
            <NavLink
              className={({ isActive }) =>
                isActive ? "underline font-bold" : ""
              }
              to="/host"
            >
              Host
            </NavLink>
          </li>
          <li className="hover:underline hover:font-black">
            <NavLink
              className={({ isActive }) =>
                isActive ? "underline font-bold" : ""
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className="hover:underline hover:font-black">
            <NavLink
              className={({ isActive }) =>
                isActive ? "underline font-bold" : ""
              }
              to="/vans"
            >
              Vans
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBars;
