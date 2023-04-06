import React from 'react';
import { NavLink } from 'react-router-dom';
import GitIcon from '../assets/github.png';
import MovieIcon from '../assets/movie.png';
import '../header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="header-items-container">
        <div className="welcome">
          <h2 className="text-welcome"> <NavLink to="/">Welcome to the Movies Page!</NavLink></h2>
          <a href="https://pngtree.com/element/down?id=NTc2Njc2OQ==&type=1&time=1680214203&token=Y2E0NGQ2NmI1MjNjOTAxN2ZjYTU5N2Q4ZDkyMTQwMzA="><img src={MovieIcon} className="icon-popcorn" alt="Popcorn icon" /></a>
        </div>
        <div className="authors">
          <h2 className="text-welcome">Authors:</h2>
          <ul>
            <li><a href="https://github.com/smirrebinx"><img src={GitIcon} className="icon-contact" alt="Github icon" /></a> </li>
            <li><a href="https://github.com/majazimnoch"><img src={GitIcon} className="icon-contact" alt="Github icon" /></a></li>
          </ul>
        </div>
      </nav>
    </header>)
}

export default Header;