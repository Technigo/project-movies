import React from "react";
import { Route, Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../assets/arrow.svg";

export const Nav = () => {
  return (
    <Route path="/movies">
      <Link to="/" className="back-button">
        <div className="svg-outer-container">
          <div className="svg-container">
            <Arrow />
          </div>
          <p className="button-text">Movies</p>
        </div>
      </Link>
    </Route>
  );
};

export default Nav;
