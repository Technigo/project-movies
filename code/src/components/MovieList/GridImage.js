import React from 'react';
import useWindowWidth from '../../hooks/useWindowWidth';

export const GridImage = ({ imagePath, gridCol }) => {
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

  if (gridItemWidth < 2000 && gridItemWidth > 780) {
    url = `https://image.tmdb.org/t/p/original${imagePath}`;
    // console.log('Image: 780px');
  } else if (gridItemWidth <= 780 && gridItemWidth > 500) {
    url = `https://image.tmdb.org/t/p/w780${imagePath}`;
    // console.log('Image: 500px');
  } else if (gridItemWidth <= 500 && gridItemWidth > 342) {
    url = `https://image.tmdb.org/t/p/w500${imagePath}`;
    // console.log('Image: 342px');
  } else if (gridItemWidth <= 342 && gridItemWidth > 185) {
    url = `https://image.tmdb.org/t/p/w342${imagePath}`;
    // console.log('Image: 342px');
  } else {
    url = `https://image.tmdb.org/t/p/w185${imagePath}`;
    // console.log('Image: 185px');
  }

  // if (width / columns > 2000) {
  //   url = `https://image.tmdb.org/t/p/w780${imagePath}`;
  //   // console.log('Image: 780px');
  // } else if (width / columns < 2000 && width > 342) {
  //   url = `https://image.tmdb.org/t/p/w500${imagePath}`;
  //   // console.log('Image: 500px');
  // } else if (width / columns < 342 && width > 185) {
  //   url = `https://image.tmdb.org/t/p/w342${imagePath}`;
  //   // console.log('Image: 342px');
  // } else {
  //   url = `https://image.tmdb.org/t/p/w185${imagePath}`;
  //   // console.log('Image: 185px');
  // }

  return (
    <div>
      <img src={url} alt="Poster" />
    </div>
  );
};
