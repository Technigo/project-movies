import React from "react";
import { Route, Link } from "react-router-dom";

export const Nav = () => {
  return (
    <Route path="/movies">
      <Link to="/" className="back-button">
        Movies
      </Link>
    </Route>
  );
};

export default Nav;
