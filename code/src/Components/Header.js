/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Header = () => {
/* const [category, setCategory] = useState('popular'); */

  return (
    <div className="header-container">
      <div className="dropdown">
        <button type="button">Menu</button>
        <div className="dropdown-content">
          <a href="#">Latest</a>
          <a href="#">Series</a>
          <a href="#">Upcoming</a>
        </div>
      </div>
    </div>
  )
}

export default Header;

/*  <label htmlFor="category">Change category: </label>  <select id="category" onChange={(event) =>
   setCategory(event.target.value)} value={category}>
            <option value="popular">Popular</option>
            <option value="now_playing">Now Playing</option>
            <option value="upcoming">Upcoming</option>
            <option value="top_rated">Top Rated</option>
          </select> */