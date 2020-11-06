import React from "react";

import "./header.css";

export const Header = () => {
  return (
    <header>
      <h1>MOVIES</h1>
      <div className="buttons">
        <button className="popular">Popular</button>
        <button className="now-playing">Now playing</button>
        <button className="upcoming">Upcoming</button>
        <button className="top-rated">Top rated</button>
      </div>
    </header>
  );
};
