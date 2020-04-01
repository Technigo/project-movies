import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

export const Navbar = ({ dropdownItem, onDropdownChange }) => {

  return (
    <nav className='navbar'>
      <h1>The Movie Project</h1>
      <div className='nav-links'>
        <Link to='/movies'>Home</Link>
        <label className='dropdown'>
          <select 
            className='dropdown-style'
            onChange={event => onDropdownChange(event.target.value)}
            value={dropdownItem}
          >
            <option value='popular'>Popular movies</option>
            <option value='top_rated'>Top rated movies</option>
            <option value='now_playing'>New releases</option>
          </select>
        </label>
      </div>
    </nav>
  );
}