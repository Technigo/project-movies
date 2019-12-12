import React from "react";
import { Route, Link } from "react-router-dom";
import { Icon } from "components/Icon";

export const LinkButton = () => (
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
