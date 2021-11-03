import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink className="nav-link" exact to="/">
          List
        </NavLink>
        <NavLink className="nav-link" to="/details">
          Details
        </NavLink>
      </nav>

      <hr />
    </header>
  );
};

export default Header;
