import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import {
  APIURL,
  APIURL_HARRYPOTTER,
  APIURL_CHRISTMAS,
  APIURL_TOPRATED,
  APIURL_UPCOMING,
} from './ApiUrls';

// Styling
import 'assets/TopNav.css';

// ----------------------------------------------------------------------------------------

const TopNav = ({ setCategoryUrl }) => {
  const history = useHistory();
  return (
    // Home-button (Returns user to list of movies
    // + rerun fetch on initial API - URL)
    <nav className="top-nav">
      <Link to="/">
        <img
          className="top-nav--logo"
          src={process.env.PUBLIC_URL + '/images/favicon.png'}
          alt="logo"
          onClick={() => {
            setCategoryUrl(APIURL); // Set new URL, trigger fetch of default data
          }}
        />
      </Link>

      {/* Dropdown to select category + change fetch details */}
      <div className="top-nav--dropdown">
        <label className="top-nav--dropdown--label" htmlFor="categories">
          Category:
        </label>
        <select
          className="top-nav--dropdown--select"
          onChange={(event) => {
            setCategoryUrl(event.target.value); // Change URL and rerun fetch
            history.push('/'); // Send user to movie-list page
          }}
        >
          <option value={APIURL}>Popular movies</option>
          <option value={APIURL_HARRYPOTTER}>✦ Harry Potter ✦</option>
          <option value={APIURL_CHRISTMAS}>✴︎ Christmas ✴︎</option>
          <option value={APIURL_TOPRATED}>Top-rated</option>
          <option value={APIURL_UPCOMING}>Upcoming</option>
        </select>
      </div>
    </nav>
  );
};

export default TopNav;
