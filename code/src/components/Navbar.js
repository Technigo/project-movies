import React from "react";
import { useHistory } from "react-router-dom";

export const Navbar = ({ category = "popular" }) => {
  const history = useHistory();

  return (
    <label>
      Select list:{" "}
      <select
        value={category}
        onChange={e => history.push(`/${e.target.value}`)}
      >
        <option value="popular">Popular</option>
        <option value="top_rated">Top Rated</option>
        <option value="upcoming">Upcoming</option>
      </select>
    </label>
  );
};
