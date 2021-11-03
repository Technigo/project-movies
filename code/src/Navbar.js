import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div >
        <ul>
          <li>
            <NavLink to="/"> Home </NavLink>
          </li>

          <li>
            <NavLink to="/toprated"> Top-rated </NavLink>
          </li>

          <li>
            <NavLink to="/upcoming"> Upcoming </NavLink>
          </li>

          <li>
            <NavLink to="/christmas">
              {" "}
              <span className="Christmas">Christmas movies </span>{" "}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
