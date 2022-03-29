import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/details"></Link>
        <Link to="/">Movies</Link>
      </nav>
    </header>
  );
};

export default Header;
