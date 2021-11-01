import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="nav-links">
      <div className="nav-link-item">
        <NavLink exact to={"/"}>
          Home
        </NavLink>
      </div>
      <div className="nav-link-item">
        <NavLink exact to={"/contactUs"}>
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
};
