import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <h1>Popular</h1>
      </Link>
      <Link to="/top">
        <h1>Top Rated</h1>
      </Link>
      <Link to="/new">
        <h1>New releases</h1>
      </Link>
      <Link to="/upcoming">
        <h1>Upcoming</h1>
      </Link>
    </nav>
  );
};

export default Nav;
