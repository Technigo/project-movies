import React, { useState } from "react";

import {
  POPULAR_URL,
  NOWPLAYING_URL,
  UPCOMING_URL,
  TOPRATED_URL,
} from ".././urls";
import "../css/header.css";

export const Header = () => {
  const [url, setUrl] = useState({POPULAR_URL});
  
  const handleOnclick = (url) => {
    setUrl(url)
  }

  return (
    <header>
      <h1>MOVIES</h1>
      <div className="buttons">
        <button onClick = { () => handleOnclick(POPULAR_URL) } className="popular">Popular</button>
        <button onClick = { () => handleOnclick(NOWPLAYING_URL) } className="now-playing">Now playing</button>
        <button onClick = { () => handleOnclick(UPCOMING_URL) } className="upcoming">Upcoming</button>
        <button onClick = { () => handleOnclick(TOPRATED_URL) } className="top-rated">Top rated</button>
      </div>
    </header>
  );
};
