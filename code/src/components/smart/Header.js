import React from "react";
import { useNavigate } from "react-router-dom";

import "./Header.css";

const Header = ({ value, setSelection }) => {
  let navigate = useNavigate();

  return (
    <header>
      <h1>Film Finder</h1>
      <nav>
        <select
          value={value}
          onChange={(event) => {
            setSelection(event.target.value);
            navigate("/");
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
      </nav>
    </header>
  );
};

export default Header;
