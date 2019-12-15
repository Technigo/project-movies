import React from "react";
import { useHistory } from "react-router-dom";

export const Navbar = ({ category = "popular" }) => {
  const history = useHistory();

  return (
    <label>
      <h1>Select movie list: </h1>
      <select value={category} onChange={e => history.push(`/${e.target.value}`)}>
        <option value="popular">Popular</option>
        <option value="top_rated">Top Rated</option>
        <option value="upcoming">Upcoming</option>
      </select>
    </label>
  );
};
