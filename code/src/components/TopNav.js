import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import {
  ApiUrl,
  HarryPotterApiUrl,
  ChristmasApiUrl,
  TopRatedApiUrl,
  UpcomingApiUrl,
} from './ApiUrls';

const TopNav = ({ setCategoryUrl }) => {
  const history = useHistory();
  return (
    <nav className="top-nav">
      <Link to="/">
        <img className="top-nav--logo" src="./images/favicon.png" alt="logo" />
      </Link>
      <div className="top-nav--dropdown">
        <label className="top-nav--dropdown--label" htmlFor="categories">
          Category:
        </label>
        <select
          className="top-nav--dropdown--select"
          onChange={(event) => {
            setCategoryUrl(event.target.value); // Change URL for initial fetch
            history.push('/'); // Send user to movie-list page
          }}
        >
          <option value={ApiUrl}>Popular movies</option>
          <option value={HarryPotterApiUrl}>✦ Harry Potter ✦</option>
          <option value={ChristmasApiUrl}>✴︎ Christmas ✴︎</option>
          <option value={TopRatedApiUrl}>Top-rated</option>
          <option value={UpcomingApiUrl}>Upcoming</option>
        </select>
      </div>
    </nav>
  );
};

export default TopNav;
