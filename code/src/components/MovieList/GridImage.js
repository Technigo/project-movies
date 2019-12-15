import React from 'react';
import useWindowWidth from '../../hooks/useWindowWidth';

export const GridImage = ({ imagePath, gridCol }) => {
  const width = useWindowWidth();
  let url = '';

  if (width > 2000) {
    url = `https://image.tmdb.org/t/p/w780${imagePath}`;
    // console.log('Image: 780px');
  } else if (width < 2000 && width > 342) {
    url = `https://image.tmdb.org/t/p/w500${imagePath}`;
    // console.log('Image: 500px');
  } else if (width < 342 && width > 185) {
    url = `https://image.tmdb.org/t/p/w342${imagePath}`;
    // console.log('Image: 342px');
  } else {
    url = `https://image.tmdb.org/t/p/w185${imagePath}`;
    // console.log('Image: 185px');
  }

  return (
    <div>
      <img src={url} alt="Poster" />
    </div>
  );
};
