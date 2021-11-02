import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="navbarContainer">
        <ul>
          <li>
            <NavLink to="/"> Home </NavLink>
          </li>

          <li>
            <NavLink to="/toprated"> Top-rated </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
