import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = ({ value, setSelection }) => {
  return (
    <header>
      <h1>Film Finder</h1>
      <nav>
        <Link className="home" to="/">
          <select
            value={value}
            onChange={(event) => {
              setSelection(event.target.value);
            }}
          >
            <option value="" disabled>
              Choose film collection
            </option>
            <option value="now_playing">Now Playing</option>
            <option value="upcoming">Upcoming</option>
            <option value="popular">Popular</option>
            <option value="top_rated">Top Rated</option>
          </select>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
