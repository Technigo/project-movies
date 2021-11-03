import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink
          className="nav-link"
          exact
          to="/"
          activeClassName="active-link"
        >
          List
        </NavLink>
        <NavLink
          className="nav-link"
          to="/details"
          activeClassName="active-link"
        >
          Details
        </NavLink>
      </nav>

      <hr />
    </header>
  );
};

export default Header;
