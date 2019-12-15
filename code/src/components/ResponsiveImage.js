import React from 'react';

export const Image = ({ image_path }) => {
  const w92 = `https://image.tmdb.org/t/p/w92${image_path}`;
  const w154 = `https://image.tmdb.org/t/p/w154${image_path}`;
  const w185 = `https://image.tmdb.org/t/p/w185${image_path}`;
  const w342 = `https://image.tmdb.org/t/p/w342${image_path}`;
  const w500 = `https://image.tmdb.org/t/p/w500${image_path}`;
  const w780 = `https://image.tmdb.org/t/p/w780${image_path}`;
  const w2000 = `https://image.tmdb.org/t/p/original${image_path}`;

  return (
    <div>
      <img
        src={w500}
        srcSet={`${w92} 92w, ${w154} 154w, ${w185} 185w, ${w342} 342w, ${w500} 500w, ${w780} 780w, ${w2000} 2000w`}
        sizes={`(max-width: 781px) 535px,
        (max-width: 1000px) 774px`}
        alt="poster"
      />
    </div>
  );
};
