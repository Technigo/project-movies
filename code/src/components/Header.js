import React from 'react';

const Header = ({ api, onApiChange }) => {
  return (
    <form>
      <select value={api} onChange={onApiChange}>
        <option value='POPULAR_URL'>Popular movies</option>
        <option value='UPCOMING_URL'>Upcoming movies</option>
        <option value='TOP_URL'>Top-rated movies</option>
      </select>
    </form>
  );
};

export default Header;