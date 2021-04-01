import React from "react";

export const Sorting = ({ onSortChange, sortMovie }) => {
  return (
    <nav className="navigation">
      <h1 tabIndex='0' className="movie-time-title">MovieTime</h1>
      <label className="drop-down" aria-label="Choose category"></label>
      <select 
        className="sort-movie"
        onChange={e => onSortChange(e.target.value)}
        value={sortMovie}>
            <option value="popular">Popular</option>
            <option value="top_rated">Top Rated</option>
            <option value="upcoming">Upcoming</option>
            <option value="now_playing">Now Playing</option>
      </select>
    </nav>
  )
}