import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ListHeader = ({ onClick }) => {
  const [showMenu, setShowMenu] = useState(false);

  const onMenuClick = () => {
    setShowMenu(!showMenu);
  };
  const categories = [
    {
      category: 'Popular',
      path: 'popular',
    },
    {
      category: 'Now Playing',
      path: 'now_playing',
    },
    {
      category: 'Upcoming',
      path: 'upcoming',
    },
    {
      category: 'Top rated',
      path: 'top_rated',
    },
  ];

  return (
    <header className="list-header">
      <Link className="list-header__logo" to="/">
        <h1>CinemaTech</h1>
      </Link>
      <button className="list-header__button" onClick={onMenuClick}>
        <i class="fas fa-bars"></i>
      </button>
      <nav
        className={
          showMenu ? 'list-header__nav--open' : 'list-header__nav--closed'
        }
      >
        {categories.map(category => {
          return (
            <>
              <Link
                to="/"
                className="list-header__link"
                onClick={() => {
                  onClick(`${category.path}`);
                  onMenuClick();
                }}
              >
                {category.category}
              </Link>
            </>
          );
        })}
        {/* <div
          className={
            showMenu ? 'list-header__nav--open' : 'list-header__nav--closed'
          }
        > */}
        {/* <Link
          to="/"
          className="list-header__link"
          onClick={() => {
            onClick('now_playing');
            onMenuClick();
          }}
        >
          Now Playing
        </Link>
        <Link
          to="/"
          className="list-header__link"
          onClick={() => {
            onClick('popular');
            onMenuClick();
          }}
        >
          Popular
        </Link>
        <Link
          to="/"
          className="list-header__link"
          onClick={() => {
            onClick('upcoming');
            onMenuClick();
          }}
        >
          Upcoming
        </Link>
        <Link
          to="/"
          className="list-header__link"
          onClick={() => {
            onClick('top_rated');
            onMenuClick();
          }}
        >
          Top Rated
        </Link> */}
        {/* </div> */}
      </nav>
    </header>
  );
};

export default ListHeader;
