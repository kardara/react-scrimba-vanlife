import React from "react";
import { NavLink, Outlet } from "react-router";

const HostLayout = () => {
  return (
    <div className="flex flex-col gap-2">
      <ul className="flex gap-1">
        <li className="hover:underline hover:font-black">
          <NavLink
            end
            className={({ isActive }) =>
              isActive ? "underline font-bold" : ""
            }
            to="/host"
          >
            Dashboard
          </NavLink>
        </li>
        <li className="hover:underline hover:font-black">
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline font-bold" : ""
            }
            to="/host/income"
          >
            Income
          </NavLink>
        </li>
        <li className="hover:underline hover:font-black">
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline font-bold" : ""
            }
            to="/host/van"
          >
            Vans
          </NavLink>
        </li>
        <li className="hover:underline hover:font-black">
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline font-bold" : ""
            }
            to="/host/reviews"
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default HostLayout;
