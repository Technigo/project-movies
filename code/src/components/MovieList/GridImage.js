import React from 'react';
import useWindowWidth from '../../hooks/useWindowWidth';

export const GridImage = ({ imagePath }) => {
  const width = useWindowWidth();
  let url = '';
  let columns = null;
  let gridItemWidth = null;

  if (width >= 800) {
    columns = 4;
  } else if (width >= 600) {
    columns = 2;
  } else {
    columns = 1;
  }

  gridItemWidth = width / columns;

  console.log(gridItemWidth);

  if (gridItemWidth < 2000 && gridItemWidth > 780) {
    url = `https://image.tmdb.org/t/p/original${imagePath}`;
  } else if (gridItemWidth <= 780 && gridItemWidth > 500) {
    url = `https://image.tmdb.org/t/p/w780${imagePath}`;
  } else if (gridItemWidth <= 500 && gridItemWidth > 342) {
    url = `https://image.tmdb.org/t/p/w500${imagePath}`;
  } else if (gridItemWidth <= 342 && gridItemWidth > 185) {
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
