import React from 'react';

const Header = ({ api, onApiChange }) => {
  return (
    <header>
      <form>
        <label htmlFor='urls'>Select a category</label>
        <select id='urls' value={api} onChange={onApiChange}>
          <option value='POPULAR_URL'>Popular movies</option>
          <option value='UPCOMING_URL'>Upcoming movies</option>
          <option value='TOP_URL'>Top-rated movies</option>
        </select>
      </form>
    </header>
  );
};

export default Header;