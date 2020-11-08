import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ButtonBack from './ButtonBack';

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
      <ButtonBack className={'button'} text="CinemaTech" />
      <button className="list-header__button" onClick={onMenuClick}>
        <i className="list-header__menu fa fa-bars"></i>
      </button>
      <nav
        className={
          showMenu ? 'list-header__nav--open' : 'list-header__nav--closed'
        }
      >
        {categories.map(category => {
          return (
            <div className="list-header__link-container" key={category.path}>
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
            </div>
          );
        })}
      </nav>
    </header>
  );
};

export default ListHeader;
