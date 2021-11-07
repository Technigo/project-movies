import React from "react";
import { NavLink } from "react-router-dom";

// HEADER COMPONENT CURRENTLY NOT USED 
const Header = () => {
  return (
    <header>
      <nav>
        <NavLink exact to="/" activeClassName="header-nav-active">
          Leos List
        </NavLink>
        <NavLink to="/movies" activeClassName="header-nav-active">
          Details
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
