import React from "react";
import { Link } from "react-router-dom";

const NavBars = () => {
  return (
    <div className="flex justify-between items-center p-6">
      <div>
        <Link to="/">
          <button className="font-black cursor-pointer text-2xl">
            #VANLIFE
          </button>
        </Link>
      </div>
      <div>
        <ul className="flex gap-2 mr-3">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/vans">Vans</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBars;
