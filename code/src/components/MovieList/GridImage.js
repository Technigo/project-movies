import React from 'react';
import useWindowWidth from '../../hooks/useWindowWidth';

export const GridImage = ({ imagePath }) => {
  const width = useWindowWidth();
  let url = '';
  let columns = null;
  let gridItemWidth = null;

  // 800 and 600 are breakpoints for the grid
  if (width >= 800) {
    columns = 4;
  } else if (width >= 600) {
    columns = 2;
  } else {
    columns = 1;
  }

  gridItemWidth = width / columns;

  if (gridItemWidth > 780) {
    url = `https://image.tmdb.org/t/p/original${imagePath}`;
  } else if (gridItemWidth > 500) {
    url = `https://image.tmdb.org/t/p/w780${imagePath}`;
  } else if (gridItemWidth > 342) {
    url = `https://image.tmdb.org/t/p/w500${imagePath}`;
  } else if (gridItemWidth > 185) {
    url = `https://image.tmdb.org/t/p/w342${imagePath}`;
  } else {
    url = `https://image.tmdb.org/t/p/w185${imagePath}`;
  }

  return (
    <div>
      <img src={url} alt="Poster" />
    </div>
  );
};
