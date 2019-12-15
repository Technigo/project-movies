import React from 'react';
import useWindowWidth from './../hooks/useWindowWidth';

export const Image = ({ image_path }) => {
  const width = useWindowWidth();
  let url = '';
  console.log(width);

  if (width > 780) {
    url = `https://image.tmdb.org/t/p/original${image_path}`;
    console.log('Image: 2000px');
  } else if (width > 500) {
    url = `https://image.tmdb.org/t/p/w780${image_path}`;
    console.log('Image: 780px');
  } else if (width > 342) {
    url = `https://image.tmdb.org/t/p/w500${image_path}`;
    console.log('Image: 500px');
  } else if (width > 186) {
    url = `https://image.tmdb.org/t/p/w342${image_path}`;
    console.log('Image: 342px');
  } else if (width > 154) {
    url = `https://image.tmdb.org/t/p/w185${image_path}`;
    console.log('Image: 185px');
  } else {
    url = `https://image.tmdb.org/t/p/w154${image_path}`;
    console.log('Image: 154px');
  }

  // return (
  //   <div>
  //     <img
  //       src={w500}
  //       srcSet={`${w92} 92w, ${w154} 154w, ${w185} 185w, ${w342} 342w, ${w500} 500w, ${w780} 780w, ${w2000} 2000w`}
  //       sizes={`(max-width: 781px) 535px,
  //       (max-width: 1000px) 774px`}
  //       alt="poster"
  //     />
  //   </div>
  // );

  return (
    <div>
      <img src={url} alt="Poster" />
    </div>
  );
};
