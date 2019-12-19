import React from 'react';
import propTypes from 'prop-types';
import useWindowWidth from '../../hooks/useWindowWidth';

export const Image = ({ image_path }) => {
  const width = useWindowWidth();
  let url = '';

  if (width > 1005) {
    url = `https://image.tmdb.org/t/p/original${image_path}`;
    // console.log('Image: 2000px');
  } else if (width > 500) {
    url = `https://image.tmdb.org/t/p/w780${image_path}`;
    // console.log('Image: 780px');
  } else if (width > 342) {
    url = `https://image.tmdb.org/t/p/w500${image_path}`;
    // console.log('Image: 500px');
  } else if (width > 186) {
    url = `https://image.tmdb.org/t/p/w342${image_path}`;
    // console.log('Image: 342px');
  } else if (width > 154) {
    url = `https://image.tmdb.org/t/p/w185${image_path}`;
    // console.log('Image: 185px');
  } else {
    url = `https://image.tmdb.org/t/p/w154${image_path}`;
    // console.log('Image: 154px');
  }

  return (
    <div>
      <img src={url} alt="Poster" />
    </div>
  );
};

Image.propTypes = {
  image_path: propTypes.string.isRequired
};
