import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  POPULAR_URL,
  SCIFI_URL,
  FRENCH_URL,
  TOPRATED_URL,
} from ".././urls";
import "../css/header.css";

export const Header = ({setCurrentUrl}) => {
  const [prefix, setPrefix] = useState("POPULAR ");
  
  const checkPrefix = (url) => {
    if (url === POPULAR_URL) setPrefix("POPULAR ");
    else if (url === SCIFI_URL) setPrefix("SCI-FI ");
    else if (url === FRENCH_URL) setPrefix("FRENCH ");
    else setPrefix("TOP RATED ");
  }
  
  const handleOnclick = (url) => {
    setCurrentUrl(url);
    checkPrefix(url);
  }

  return (
    <header>
      <h1>{prefix}MOVIES</h1>
      <div className="buttons">
        <button onClick = { () => handleOnclick(POPULAR_URL) } className="popular"><Link to="/">Popular</Link></button>
        <button onClick = { () => handleOnclick(SCIFI_URL) } className="now-playing"><Link to="/">Sci-Fi</Link></button>
        <button onClick = { () => handleOnclick(FRENCH_URL) } className="upcoming"><Link to="/">French</Link></button>
        <button onClick = { () => handleOnclick(TOPRATED_URL) } className="top-rated"><Link to="/">Top rated</Link></button>
      </div>
    </header>
  );
};
