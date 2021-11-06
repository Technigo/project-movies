import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header-wrap">
        <nav>
          <NavLink exact to="/">
            {" "}
            <h1 className="moviename">Moviebox</h1>
          </NavLink>
        </nav>
        {/* <nav>
          <NavLink exact to="/Details">
            <h2 className="movielink">Details</h2>
          </NavLink>
        </nav> */}
      </div>
    </header>
  );
};

export default Header;
