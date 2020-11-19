import React from 'react';
import { NavLink } from 'react-router-dom';

import { HalloweenApiUrl, ChristmasApiUrl, SummerApiUrl, LoveApiUrl } from 'urls';

import 'styles/header.css';
import 'styles/options.css';

export const Options = ({ setThemeUrl }) => {

  return (
    <div className="select-wrapper">
      <NavLink to="/theme" className="nav-links">
        <select 
          className="select-movie"
          onChange={event => {
          setThemeUrl(event.target.value); // Change url based on choosen theme
          }}
        >
          <option value="">Choose movies by theme</option>
          <option value={HalloweenApiUrl}>Halloween</option>
          <option value={ChristmasApiUrl}>Christmas</option>
          <option value={SummerApiUrl}>Summer</option>
          <option value={LoveApiUrl}>Love</option>
        </select>
      </NavLink>
    </div>
  );
};
