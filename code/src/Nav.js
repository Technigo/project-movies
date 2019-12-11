import React from "react";
import { Route, Link } from "react-router-dom";
import { Icon } from "Icon";

export const Nav = () => (
  <header>
    <Route path="/movies">
      <Link to="/" className="link-wrap">
        <div className="back-button">
          <Icon />
        </div>
        <h4>Movies</h4>
      </Link>
    </Route>
  </header>
);
